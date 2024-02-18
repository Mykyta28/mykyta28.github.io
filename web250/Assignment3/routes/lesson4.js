const express = require("express");
const router = express.Router();
const { buildResponse } = require("../helpers/view");

router.get("/", function (request, response) {
  response.send(buildResponse("./templates/lesson4/lesson4.html"));
});

router.post("/", function (request, response) {
  const dispatcher = { generate, start };
  if (request.body.submit in dispatcher)
    return dispatcher[request.body.submit](request, response);

  response.send(buildResponse("./templates/lesson4/lesson4.html"));
});

function generate(request, response) {
  const { value, "expression-quantity": quantity } = request.body;

  response.send(
    buildResponse("./templates/lesson4/lesson4.html", {
      expressionsConfig: generateExpressionsConfig(
        Number(value),
        Number(quantity)
      ),
    })
  );
}

function start(request, response) {
  const { left, rights, results } = request.body;
  response.json(
    results.map(
      (result, index) => Number(result) === Number(left) + Number(rights[index])
    )
  );
}

function generateExpressionsConfig(value, quantity) {
  const result = {
    left: value,
    rights: [],
  };

  while (value && quantity-- > 0)
    result.rights.push(Math.floor(Math.random() * (value + 10)));

  return result;
}

module.exports = router;
