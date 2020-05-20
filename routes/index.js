const ticketRoutes = require("./ticket.routes");
const actRoutes = require("./act.routes");
const express = require("express");
const router = express.Router();

router.use("/booking", ticketRoutes);
router.use("/act", actRoutes);

module.exports = router;
