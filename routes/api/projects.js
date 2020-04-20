const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

module.exports = router;
