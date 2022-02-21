const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
    return res.send("Hello There");
});

app.get("/login", (req, res) => {
    return res.send("Login Page");
});

app.listen(port, () => {
    console.log("working fine");
})



// const port = 3000

// app.get('/', (req, res) => res.send("Hello World"));

// app.listen(port, () => console.log(`woring`))