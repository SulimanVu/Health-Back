const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    discription: String,
    image: String,
    calories: Number
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product