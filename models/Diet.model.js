const mongoose = require('mongoose')

const dietSchema = mongoose.Schema({
    name: String,
    description: String,
    product: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product'
    }],
    image: String
})


const Diet = mongoose.model('Diet', dietSchema)

module.exports = Diet