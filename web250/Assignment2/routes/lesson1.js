const express = require('express');
const router = express.Router();

const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lesson 1</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>Hello! I am a lesson number 1!</p>
    <button class="back-button" onclick="goBack()">Back</button>

    <script>
        function goBack() {
            window.history.back();
        }
    </script>
</body>
</html>
`;

router.get("/", function (request, response) {
    response.send(HTML);
});

module.exports = router;
