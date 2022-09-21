const Product = require("../models/Product.model");

module.exports.productController = {
    addProduct: async (req, res) => {
        const { title, discription, image, calories } = req.body;
        try {
            const product = await Product.create({
                title,
                discription,
                image,
                calories
            })
            res.json(product)
        } catch (e) {
            res.json(e)
        }
    },
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (e) {
            res.json(e)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(req.params.productId)
            res.json(product)
        } catch (e) {
            res.json(e)
        }
    },
}