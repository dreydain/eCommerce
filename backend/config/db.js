import mongoose from 'mongoose'
const mongo_uri = 'mongodb+srv://April:ShadowDrifter89@ecommerce.bwgsw.mongodb.net/eCommerce?retryWrites=true&w=majority'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongo_uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    
    } catch (error) {
        console.error(`Error ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB