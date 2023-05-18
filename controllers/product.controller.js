import asyncHandler from '../utils/asyncHandler.js'
import productModel from '../models/products.model.js'
import CustomError from '../utils/CustomError.js'

/*****************************************************
 * @productView
 * @route http://localhost:4000/products
 * @method GET
 * @description get products
 * @params -
 * @return products
 ****************************************************/
export const productView = asyncHandler(async (_req, res) => {
    const product = await productModel.aggregate([
        {
            $match: { size: 'small' }
        },
        {
            $group: { _id: '$dish', totalQuantity: { $sum: "$quantity" }}
        }
    ])

    res.status(200).json({
        success: true,
        message: "success",
        product
    })
})

/*****************************************************
 * @createProduct
 * @route http://localhost:4000/create
 * @method POST
 * @description create product
 * @params dish, size, quantity
 * @return success message
 ****************************************************/
export const createProduct = asyncHandler(async (req, res) => {
    const { dish, size, quantity } = req.body

    const product = await productModel.create({ 
        dish,
        size,
        quantity
    })

    if(!product) {
        throw new CustomError("Product is not created", 400)
    }

    res.status(200).json({
        success: true,
        message: "product created successfully",
        product
    })
})