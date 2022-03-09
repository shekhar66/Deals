const express = require("express");
const router = express.Router();
const leadController = require("../controller/leadController");

router.route("/").get(leadController.getAllLeads).post(leadController.addLead);
router
  .route("/:id")
  .get(leadController.getLead)
  .patch(leadController.updateLead)
  .delete(leadController.deleteLead);

module.exports = router;
