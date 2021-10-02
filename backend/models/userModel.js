import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    
}, {timestamps: true})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

//this function will run on pre save to a user being created. It will encrypt and hash the password.
//It will also check to see if the password was modified/updated, if not then it wont run this function.
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
