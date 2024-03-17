const { Router } = require("express");
const MOVIES_ROUTER = require("./movies_r");

const ROUTER = Router();

ROUTER.use("/movies", MOVIES_ROUTER);
module.exports = ROUTER;
