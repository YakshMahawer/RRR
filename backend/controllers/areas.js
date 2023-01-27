const AreaData = require('../models/areaschema');
const complaintData = require('../models/complaintschema');

// Get all areas

const getAllAreas = async (req, res) => {
    try {
        const areas = await AreaData.find();
        res.status(200).json(areas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

module.exports = {
    getAllAreas
}