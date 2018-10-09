const router = require("express").Router();
const firstController = require("../../controllers/GroupController")
// Matches with "/api/items"
router.route("/home")
  .get(GroupController.findById)
  .post(GroupController.create);

// Matches with "/api/items/:id"
router.route("/:id")
  .get(GroupController.findById)
  .put(GroupController.update)
  .delete(GroupController.remove);

module.exports = router;
