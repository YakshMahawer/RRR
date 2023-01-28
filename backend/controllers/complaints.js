const ComplaintData = require("../models/complaintschema")
const AreaData = require("../models/areaschema")
const Voterinfo = require("../models/voterinfoschema")
const AdminData = require('../models/adminDataSchema')

// Create and Save a new Complaint

const createComplaint = async (req, res) => {
  try {
    const { voterId, dob, option, other } = req.body;

    const candidate = await Voterinfo.findOne({ voterId });
    const allComplaints = await ComplaintData.find();
    const allAreas = await AreaData.find();

    // ----------------- Make sure the voterId is valid
    if (!candidate) {
      return res.status(400).json({ error: "Invalid Voter Id" });
    }

    const splitDob = Array((JSON.stringify(candidate.dob)).split('T',1)[0])[0].slice(1)

    // ----------------- Verify the voterId and dob
    if (dob !== splitDob) {
      return res.status(400).json({ error: "Invalid Voter Id" });
    }

    // ----------------- Make sure the condidate has not already registered a complaint
    const complaints = await ComplaintData.find({ voterId: voterId });
    if (complaints.length > 0) {
      return res.status(400).json({ error: "Complaint already registered" });
    }

    // allot a adminId to the complaint

    const admin = await AdminData.findOne({ flag: true });
    const admin_no_ = admin.admin_no;
    // admin.push({ flag: false });
    await AdminData.updateOne({flag: true}, {flag: false})
    const admin_inc = admin_no_ === 55 ? 11 : admin_no_ + 11;
    const admin2 = await AdminData.findOneAndUpdate({ admin_no: admin_inc }, {flag: true});
    // admin2.push({ flag: true });
    await admin.save();
    await admin2.save();

    //  new complaint

    const newComplaint = new ComplaintData({
      voterId,
      area_name: candidate.area,
      category: option,
      status: option === "other" ? "Pending" : "Accepted",
      otherCategory: other,
      complaintId: !allComplaints.length ? 1 : allComplaints.length + 1,
    });

    if (option !== "other") {

      const area = await AreaData.findOne({ area_name: candidate.area });
      // -----------------what if there is no area in the area collection
      // -----------------create a new area and push the complaint category in the problem array

      if (!area) {
        const newArea = new AreaData({
          area_name: candidate.area,
          area_id: !allAreas.length ? 1 : allAreas.length + 1,
          total_problems: 1,
          problems: [
            {
              category: option,
              count: 1,
            },
          ],
        });
        await newArea.save();
      } else {
        const category = area.problems.find((item) => item.category === option);

        area.total_problems += 1;

        if (category) {
          category.count += 1;
        } else {
          area.problems.push({
            category: option,
            count: 1,
          });
        }
        await area.save();
      }
    }else {
      newComplaint.admin_no = admin_no_;
    }

    // -----------------what if there is no option/category selected for area's problem array

    const savedComplaint = await newComplaint.save();

    res.status(200).json(savedComplaint); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update status and category of a complaint by id

const updateComplaint = async (req, res) => {
  try {
    const { status, category, complaintId, addInfo } = req.body;
    const allAreas = await AreaData.find();
    const complaint = await ComplaintData.findOne({ complaintId: complaintId });

    if (!complaint) {
      return res.status(400).json({ error: "Complaint not found" });
    }

    complaint.status = status;
    complaint.category = category;
    complaint.addInfo = addInfo;

    const savedComplaint = await complaint.save();

    if (savedComplaint.status === "Accepted") {
      const area = await AreaData.findOne({
        area_name: savedComplaint.area_name,
      });

      // -----------------what if there is no area in the area collection
      // -----------------create a new area and push the complaint category in the problem array

      if (!area) {
        const newArea = new AreaData({
          area_name: savedComplaint.area_name,
          area_id: !allAreas.length ? 1 : allAreas.length + 1,
          total_problems: 1,
          problems: [
            {
              category: savedComplaint.category,
              count: 1,
            },
          ],
        });
        await newArea.save();
      } else {
        const category = area.problems.find(
          (item) => item.category === savedComplaint.category
        );

        area.total_problems += 1;

        if (category) {
          category.count += 1;
        } else {
          area.problems.push({
            category: savedComplaint.category,
            count: 1,
          });
        }
        await area.save();
      }
    }

    res.status(200).json(savedComplaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Get one complaint by id

const getComplaintById = async (req, res) => {
  try {
    const complaint = await ComplaintData.findOne({
      complaintId: req.params.id,
    });
    res.status(200).json(complaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Get all complaints

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await ComplaintData.find();
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Get all complaints by area

const getAllComplaintsByArea = async (req, res) => {
  try {
    const complaints = await ComplaintData.find({
      area_name: req.params.area_name,
    });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Get all complaints by admin

const getAllComplaintsByAdmin = async (req, res) => {
  try {
    const complaints = await ComplaintData.find({
      admin_no: req.params.admin_no,
    });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get complaints by voterId

const getComplaintsByVoterId = async (req, res) => {
  try {
    const { voterId, dob } = req.params;
    const candidate = await Voterinfo.findOne({ voterId });
    // const verify = candidate.dob === dob;

    const splitDob = Array((JSON.stringify(candidate.dob)).split('T',1)[0])[0].slice(1);

    if (dob !== splitDob) {
      return res.status(400).json({ error: "Invalid Voter Id" });
    }

    const complaint = await ComplaintData.findOne({ voterId });

    if (!complaint) {
      return res.status(400).json({ error: "Complaint not found" });
    }

    res.status(200).json(complaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createComplaint,
  getComplaintById,
  getAllComplaints,
  getAllComplaintsByArea,
  getAllComplaintsByAdmin,
  getComplaintsByVoterId,
};