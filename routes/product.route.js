const { Router } = require('express')
const { productController } = require('../controllers/product.controller')
const router = Router()

router.get('/product', productController.getAllProducts)
router.delete('/product/:productId', productController.deleteProduct)
router.post('/product', productController.addProduct)

module.exports = router