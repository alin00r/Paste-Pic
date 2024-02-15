const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
require("./db");

app.set("view engine", "hbs");
const publicDirectoryPath = path.join(__dirname, "public");

app.use(express.static(publicDirectoryPath));

const pastes = require("./routers/pastes");

app.use(express.json());
app.use(pastes);

module.exports = app;