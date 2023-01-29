const AdminData = require('../models/adminDataSchema')
const OtpData = require('../models/otpSchema')
const bcrypt = require('bcryptjs')

const postAdmin = async (req, res) => {
  try {
    const { mail } = req.body;
    const { password } = req.body;
    const user = await AdminData.findOne({ mail })
    if (!user) {
      return res.status(404).json('no user with the email')
    }
    await bcrypt.compare(password, user.password).then((data) => {
      if (data) {
        const accountSid = "AC6446f6077996c3c9dd57a0321ad5ce53"
        const authToken = "b9f29e1ef4bd25de69e172b1b80183ea"
        const client = require('twilio')(accountSid, authToken)
        let gotp = Math.floor(Math.random() * (9999 - 1000)) + 1000
        const phoneNumber = user.contact
        const otpGenerate = new OtpData({
          contact: phoneNumber,
          otp: gotp,
        })
        otpGenerate.save()
        client.messages.create({
          body: `Dear customer, your OTP is ${gotp}. Remember, this OTP is only valid for 5 minutes`,
          from: '+12182154100',
          to: `+91${phoneNumber}`
        }).then(() => {
          return res.status(200).json('password matched, onto otp verification')
        }).catch((err) => {
          console.log(err);
        })
      } else {
        return res.status(404).json('wrong password')
      }
    })
  } catch (error) {
    res.json(error)
  }
}

const verifyAdmin = async (req, res) => {
  try {
    const { otp } = req.body
    const { email } = req.params

    const user = await AdminData.findOne({ mail: email })
    const phoneNumber = user.contact
    const gotOtp = await OtpData.find({ contact: phoneNumber })
    if (!gotOtp) {
      return res.status(404).json('no otp in database')
    }
    if (Number(otp) === gotOtp[gotOtp.length - 1].otp) {
      return res.status(200).json('Authentication successful')
    }
    return res.status(404).json('wrong otp')
  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  postAdmin,
  verifyAdmin
}