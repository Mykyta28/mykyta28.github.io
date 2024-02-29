const express = require("express");
const multer = require("multer");
const fs = require("fs");
const csv = require("csv-parser");
const router = express.Router();
const { buildResponse } = require("../helpers/view");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./templates/lesson5/uploads");
//   },
//   filename: (req, file, cb) => {
//     const { originalname } = file;
//     cb(null, originalname);
//   },
// });

//const upload = multer({ storage });
const upload = multer({ dest: "./templates/lesson5/uploads" });

router.get("/", function (request, response) {
  response.send(buildResponse("./templates/lesson5/lesson5.html"));
});

router.post("/upload", upload.single("tsunami"), (req, res) => {
  try {
    const rows = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (row) => {
        row.Date = formatDate(row.Date);
        rows.push(row);
      })
      .on("end", () => {
        let html = "<table style='width:100%; border-collapse:collapse;'><tr>";
        if (rows.length > 0) {
          const headers = Object.keys(rows[0]);
          headers.forEach((header) => {
            html += `<th style='padding:8px; border:1px solid #ddd; background-color:#f2f2f2;'>${header}</th>`;
          });
          html += "</tr>";

          rows.forEach((row, index) => {
            const bgColor = index % 2 === 0 ? "#e6f7ff" : "#e6ffe6";
            html += `<tr style='background-color:${bgColor};'>`;
            headers.forEach((header) => {
              html += `<td style='padding:8px; border:1px solid #ddd;'>${row[header]}</td>`;
            });
            html += "</tr>";
          });
        } else {
          html +=
            "<th style='background-color:#f2f2f2;'>No data available</th>";
        }
        html += "</table>";

        //fs.unlink(path.join(__dirname, "..", req.file.path), () => {});
        fs.unlink(req.file.path, () => {});

        res.send(html);
      });
  } catch (error) {
    console.error("Error processing CSV:", error);
    res.status(500).send("Internal Server Error");
  }
});

function formatDate(inputDate) {
  const dateObject = new Date(inputDate);

  if (!isNaN(dateObject.getTime())) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleDateString(undefined, options);
    return formattedDate;
  } else {
    return inputDate;
  }
}

module.exports = router;
