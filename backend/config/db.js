import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost/" + process.env.DB_NAME, {
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