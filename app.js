const express = require("express");
const nameRouter = require("./routes/nameRoute");
const numRouter = require("./routes/numRoute")

const app = express();

app.use(express.json());

const router = express.Router();




router.route("is-prime/")

app.use("/hello", nameRouter);
app.use("/is-prime", numRouter)

module.exports = app;
