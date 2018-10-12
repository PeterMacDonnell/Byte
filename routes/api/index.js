const router = require("express").Router();
const groupRoutes = require("./Group");
const choiceRoutes = require("./Choice");
const userRoutes = require("./User");

// Boilerplate code for routing
router.use("/group", groupRoutes);
router.use("/user", userRoutes);
router.use("/choice", choiceRoutes);

module.exports = router;
