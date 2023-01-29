const express = require("express");
const router = express.Router();
const {
  getAllComplaints,
  createComplaint,
  getAllComplaintsByAdmin,
  getAllComplaintsByArea,
  getComplaintsByVoterId,
  updateComplaint
} = require("../controllers/complaints");

router.route("/complaint/registercomplaint").post(createComplaint);
router.route("/complaints/admin/:admin_no").get(getAllComplaintsByAdmin);
router.route("/complaints/all").get(getAllComplaints);
router.route("/complaints/:voterId/:dob").get(getComplaintsByVoterId);
router.route("/admin/adminUpdatesComplaint").post(updateComplaint);
// router.route("/complaints/:area_name").get(getAllComplaintsByArea);

module.exports = router;