const express = require("express");
const router = express.Router();
const {
  getAllComplaints,
  createComplaint,
  getAllComplaintsByAdmin,
  getAllComplaintsByArea,
  getComplaintsByVoterId,
} = require("../controllers/complaints");

router.route("/complaints/").post(createComplaint);
router.route("/complaints/admin/:admin_no").get(getAllComplaintsByAdmin);
router.route("/complaints/all").get(getAllComplaints);
router.route("/complaints/:voter_id/:dob").get(getComplaintsByVoterId);
// router.route("/complaints/:area_name").get(getAllComplaintsByArea);

module.exports = router;