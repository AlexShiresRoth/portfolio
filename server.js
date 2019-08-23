const express = require("express");
const path = require("path");
const cors = require('cors');
const indexRouter = require("./routes/index");
const emailRouter = require("./routes/email");

const app = express();
app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./client/views"));
app.use(express.static(path.join(__dirname, "./client")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/api/send-email", emailRouter);

module.exports = app;
