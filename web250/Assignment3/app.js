const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

fs.readdirSync("./routes").map((filename) => {
  const module = require("./routes/" + filename);
  const route = filename.replace(".js", "");
  app.use("/" + route, module);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
