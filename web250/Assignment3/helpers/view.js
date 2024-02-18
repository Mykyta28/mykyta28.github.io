const fs = require("fs");
const handlebars = require("handlebars");
function buildResponse(path, data = {}) {
  let source = fs.readFileSync(path);
  let template = handlebars.compile(source.toString());
  return template(data);
}

module.exports = { buildResponse };
