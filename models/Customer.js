const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    occupation: {
        type: String,
        required: true,

    },
    subscribedToPackage: {
        type: String,
        required: false
    },
    subscribeDate: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('Customer', customerSchema)
