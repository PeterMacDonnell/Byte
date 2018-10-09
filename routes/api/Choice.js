const router = require("express").Router();
const firstController = require("../../controllers/ChoiceController")
// Matches with "/api/items"
router.route("/home")
  .get(ChoiceController.findById)
  .post(ChoiceController.create);

// Matches with "/api/items/:id"
router.route("/:id")
  .get(ChoiceController.findById)
  .put(ChoiceController.update)
  .delete(ChoiceController.remove);

module.exports = router;
