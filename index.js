import mongoose from 'mongoose'
import config from './config/index.js'
import app from './app.js'

(async () => {
    try {
        await mongoose.connect(config.MONGODB_URL)
        console.log("DB is connected")

        app.on("error", (error) => {
            console.log("DB is not connected", error)
        })

        const onListening = () => {
            console.log("APP is running on PORT", config.PORT)
        }

        app.listen(config.PORT, onListening)
    } catch (error) {
        console.log("Error", error)
    }
})()