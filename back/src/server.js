const EXPRESS = require("express");
const MORGAN = require("morgan");
const CORS = require("cors");
const ROUTER = require("./routes/index_r");

const APP = EXPRESS();

APP.use(MORGAN("dev"));
APP.use(CORS());
APP.use(EXPRESS.json());
APP.use(ROUTER);

module.exports = APP;
