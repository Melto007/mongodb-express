import express from 'express'
const app = express()
import productRouter from './routes/product.route.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(productRouter)

export default app