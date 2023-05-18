import mongoose from 'mongoose'
import pizzaSize from '../utils/pizzaSize.js'

const productSchema = mongoose.Schema(
    {
        dish: {
            type: String,
            required: true
        },
        size: {
            type: String,
            enum: Object.values(pizzaSize),
            default: pizzaSize.small,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.model('Product', productSchema)