const express = require('express')
const fs = require("fs");
const handlebars = require('handlebars');

const router = express.Router()
router.get("/", function (request, response) {
    let source = fs.readFileSync("./templates/lesson2/hello.html");
    let template = handlebars.compile(source.toString());
    let data = {
        greeting: "Hello",
        name: "world"
    }
    let result = template(data);
    response.send(result);
});

router.get("/about-me", function (request, response) {
    let source = fs.readFileSync("./templates/lesson2/about.html");
    let template = handlebars.compile(source.toString());
    let data = {
        greeting: "Hi!",
        firstName: "Mykyta",
        lastName: "Semenii",
        employment: "Web Developer"
    }
    let result = template(data);
    response.send(result);
});

router.get("/contact-info", function (request, response) {
    let source = fs.readFileSync("./templates/lesson2/contact.html");
    let template = handlebars.compile(source.toString());
    let data = {
        fullName: "Mykyta Semenii",
        tel: "(222)-222-2222",
        email: "nick@gamil.com",
        address: "Prospect Heights, IL, 60070"
    }
    let result = template(data);
    response.send(result);
});

router.get("/server", function (request, response) {
    let source = fs.readFileSync("./templates/lesson2/server.html");
    let template = handlebars.compile(source.toString());
    const serverInfo = {
        currentDate: new Date().toLocaleString(),
        hostname: require('os').hostname(),
        ipAddress: request.connection.remoteAddress,
        os: require('os').platform(),
        nodeVersion: process.version,
    };
    let result = template(serverInfo);
    response.send(result);
});

module.exports = router;