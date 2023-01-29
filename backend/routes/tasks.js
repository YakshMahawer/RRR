const express = require('express')

const {
  postAdmin,
  verifyAdmin
} = require('../controllers/tasks')

const router = express.Router()

router.route('/admin').post(postAdmin)
router.route('/verify/:email').post(verifyAdmin)

module.exports = router