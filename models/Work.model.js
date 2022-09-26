const mongoose = require('mongoose')

const workSchema = mongoose.Schema({
    image: String,
    name: String,
    description: String
})

const Work = mongoose.model('Work', workSchema)
module.exports = Work;