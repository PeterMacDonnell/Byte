const router = require("express").Router();
const groupController = require("../../controllers/GroupController")
// Matches with "/api/items"
router.route("/home")
  .get(groupController.findById)
  .post(groupController.create);

// Matches with "/api/items/:id"
router.route("/:id")
  .get(groupController.findById)
  .put(groupController.update)
  .delete(groupController.remove);

module.exports = router;
