const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  profile: String,
  name: String,
  phone: Number,
})

const contactModel = mongoose.model('contact', contactSchema)

module.exports = contactModel