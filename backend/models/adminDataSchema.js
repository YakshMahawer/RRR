const mongoose = require('mongoose')
const validator = require('validator')

const AdminSchema = new mongoose.Schema({

  mail:{
    type:String,
    required:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Provide a valid email')
      }
    }
  },

  admin_no:{
    type:Number,
    required:true,
    unique:true,
  },

  admin_name:{
    type:String,
    required:true,
    trim:true,
  },

  password:{
    type:String,
    required:true,
  },

  contact:{
    type:Number,
    required:true,
    validate(value){
      if(value.toString().length !== 10){
        throw new Error('Invalid number')
      }
    }
  },

})

const AdminData = new mongoose.model('CREDENTIAL', AdminSchema)

module.exports = AdminData;