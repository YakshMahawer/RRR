const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
  contact: String,
  otp:Number,
  createdAt: {
    type: Date,
    expires: "5m",
    default: Date.now
  }
})

const OtpData = new mongoose.model('Otp', otpSchema)

module.exports = OtpData