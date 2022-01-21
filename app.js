const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
require('dotenv').config();

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var uri = process.env.DB_PATH;
mongoose.connect(uri, { useNewUrlParser: true });
const hotelsSchema = {
    firstName: String,
    lastName: String,
    email: String,
    phone: String
};
const Hotel = new mongoose.model("Hotel", hotelsSchema);

app.get("/home", function (req, res) {
    res.redirect("/");
});
app.get("/contact", function (req, res) {
    res.render("contact");
});
app.get("/service", function (req, res) {
    res.render("service");
});
app.get("/aboutMe", function (req, res) {
    res.render("aboutMe");
});
app.get("/bookNow", function (req, res) {
    res.render("contact");
});

app.post("/rooms", function (req, res) {
    const hotel = new Hotel({
        firstName: req.body.firstName.toUpperCase(),
        lastName: req.body.lastName.toUpperCase(),
        email: req.body.email,
        phone: req.body.phone
    });
    hotel.save();
    res.redirect("/");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

let port = process.env.PORT;
if (port == null || port ==""){
    port = 3000;
}

app.listen(3000, function (req, res) {
    console.log("Server is ready.");
});

function newFunction() {
    const dotenv = require("dotenv");
    dotenv.config();
}