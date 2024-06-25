const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
    const usrInput = req.body.locIn

    console.log("Email Received: " + usrInput);

    const firstName = req.body.first;
    const lastName = req.body.last;
    const email = req.body.email;

    console.log(firstName)
});

app.listen(3000, function() {
    console.log("server running on port 3000");
});

