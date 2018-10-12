const router = require("express").Router();
const UserController = require("../../controllers/UserController")
// Matches with "/api/items"
router.route("/home")
  .get(UserController.findById)
  .post(UserController.create);

// Matches with "/api/items/:id"
router.route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;
