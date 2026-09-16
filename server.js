const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>My Azure Web Application</h1>
        <p>Hello from Microsoft Azure!</p>
        <p>This application is deployed using Azure App Service.</p>
    `);
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <p>Node.js web application running on Azure.</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});