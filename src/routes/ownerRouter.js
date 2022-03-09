const express = require("express");
const router = express.Router();
const ownerController = require("../controller/ownerController");
const authorization = require("../middleware/authorization");

router.route("/").get(ownerController.getAllOwners);
router.route("/signup").post(ownerController.signUpOwner);
router.route("/login").post(ownerController.loginOwner);
router
  .route("/:id")
  .get(ownerController.getOwner)
  .delete(ownerController.deleteOwner)
  .patch(ownerController.updateOwner);

module.exports = router;
