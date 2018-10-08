const router = require("express").Router();
const controller = require("");

// Boilerplate routing stuff from old activities
router.route("/")
  .get()
  .post();


router
  .route("/:id")
  .get()
  .put()
  .delete();

module.exports = router;
