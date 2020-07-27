const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        picture:{
            type: String,
            required: true,
            unique: true,
        },
        discription:{
            type: String,
            required: true,
            unique: true
        },
        price:{
            type: Number,
            required: true,
        }
    }
)
module.exports = userSchema;