const router = require("express").Router();
const projectRoutes = require("./projects");

// Post routes
router.use("/projects", projectRoutes);

module.exports = router;
