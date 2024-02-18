const express = require("express");
const router = express.Router();
const app = express();
const {buildResponse} = require('../helpers/view')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.send(buildResponse('./templates/lesson3/lesson3.html', {
        first: "Hello",
        last: "World"
    }));
});

router.get("/shapes", (req, res) => {
    res.send(buildResponse('./templates/lesson3/shapes.html', {
        area: req.query.side ? `Area of square is ${req.query.side * req.query.side}` : '',
    }));
});

router.post("/shapes-post", (req, res) => {
    res.send(buildResponse('./templates/lesson3/shapes.html', {
        area: req.body.side ? `Area of square is ${req.body.side * req.body.side}` : '',
    }))
})

router.get("/BMI", (req, res) => {
    res.send(buildResponse('./templates/lesson3/BMI.html'));
});

router.post('/BMI-post', (req, res) => {
    let result = "";
    if(req.body.weight && req.body.height) {
        let weight = req.body.weight;
        let height = req.body.height;
        let bmi = weight / (height * 2) * 703;
        result = `Your BMI is - ${bmi}`;
    }
    res.send(buildResponse('./templates/lesson3/BMI.html', { bmi: result }));
})
module.exports = router;
