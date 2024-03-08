const express = require("express");
const fs = require("fs");
const { buildResponse } = require("../helpers/view");
const fetch = import("node-fetch");
const multer = require("multer");
const router = express.Router();

const uploads = multer({ dest: "./templates/lesson8/uploads" });

router.get("/", (req, res) => {
  res.send(buildResponse("./templates/lesson8/lesson8.html"));
});

router.post("/upload", uploads.single("tsunami"), (req, res) => {
  fs.readFile(req.file.path, "utf8", (error, file) => {
    const data = JSON.parse(file);

    // data.results.bindings.sort((a, b) => {
    //   if (a.Continent.value < b.Continent.value) {
    //     return -1;
    //   }
    //   if (a.Continent.value > b.Continent.value) {
    //     return 1;
    //   }
    //   return 0;
    // });

    //Sort by Continent
    data.results.bindings.sort((a, b) => {
      return a.Continent.value.localeCompare(b.Continent.value);
    });
    //Sort by Country
    data.results.bindings.sort((a, b) => {
      return a.Country.value.localeCompare(b.Country.value);
    });

    data.results.bindings.forEach((row) => {
      row.Date.value = formatDate(row.Date.value);
    });

    let html = "<table style='width:100%; border-collapse:collapse;'><tr>";
    if (data.results.bindings.length > 0) {
      const headers = Object.keys(data.results.bindings[0]);
      data.head.vars.forEach((header) => {
        html += `<th style='padding:8px; border:1px solid #ddd; background-color:#f2f2f2;'>${header}</th>`;
      });
      html += "</tr>";
      data.results.bindings.forEach((row, index) => {
        const bgColor = index % 2 === 0 ? "#e6f7ff" : "#e6ffe6";
        html += `<tr style='background-color:${bgColor};'>`;
        headers.forEach((header) => {
          html += `<td style='padding:8px; border:1px solid #ddd;'>${row[header].value}</td>`;
        });
        html += "</tr>";
      });
    } else {
      html += "<th style='background-color:#f2f2f2;'>No data available</th>";
    }
    html += "</table>";
    fs.unlink(req.file.path, () => {});
    res.send(html);

    console.log(data.results.bindings);
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
