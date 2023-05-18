import { productView, createProduct } from '../controllers/product.controller.js'
import express from 'express'
const productRouter = express.Router()

productRouter.get('/products', productView)
productRouter.post('/create', createProduct)

export default productRouter