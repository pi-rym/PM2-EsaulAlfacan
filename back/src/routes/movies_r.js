const { Router } = require("express");
const MOVIES_CONTROLLER = require("../controller/movies_c");

const MOVIES_ROUTER = Router();

MOVIES_ROUTER.get("/", MOVIES_CONTROLLER);

module.exports = MOVIES_ROUTER;
