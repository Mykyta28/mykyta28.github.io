const express = require("express");
const multer = require("multer");
const fs = require("fs");
const csv = require("csv-parser");
const router = express.Router();
const { buildResponse } = require("../helpers/view");
const path = require("path");
const JSONStream = require("JSONStream");
const json = require("body-parser/lib/types/json");

const upload = multer({ dest: "./templates/lesson6/uploads" });

router.get("/", function (request, response) {
  response.send(buildResponse("./templates/lesson6/lesson6.html"));
});

router.post("/upload", upload.single("earthquake"), (req, res) => {
  fs.readFile(req.file.path, "utf8", (err, file) => {
    const data = JSON.parse(file);

    data.sort((a, b) => {
      return b.Magnitude - a.Magnitude;
    });

    data.forEach((row) => {
      row.Date = formatDate(row.Date);
    });

    let html = "<table style='width:100%; border-collapse:collapse;'><tr>";
    if (data.length > 0) {
      const headers = Object.keys(data[0]);
      headers.forEach((header) => {
        html += `<th style='padding:8px; border:1px solid #ddd; background-color:#f2f2f2;'>${header}</th>`;
      });
      html += "</tr>";
      data.forEach((row, index) => {
        const bgColor = index % 2 === 0 ? "#e6f7ff" : "#e6ffe6";
        html += `<tr style='background-color:${bgColor};'>`;
        headers.forEach((header) => {
          html += `<td style='padding:8px; border:1px solid #ddd;'>${row[header]}</td>`;
        });
        html += "</tr>";
      });
    } else {
      html += "<th style='background-color:#f2f2f2;'>No data available</th>";
    }
    html += "</table>";
    //fs.unlink(path.join(__dirname, "..", req.file.path), () => {});
    fs.unlink(req.file.path, () => {});
    res.send(html);
  });
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
