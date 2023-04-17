const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config

const app = express();
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const apiPoke = require("./routes/apiExterna");

const {connect} = require("./db/db");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/api", apiPoke);

connect();

module.exports = app

