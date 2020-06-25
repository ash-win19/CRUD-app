const mongoose = require('mongoose');
const infoSchema = mongoose.Schema({
    Product: {
        type: String,
        required: true,
        trim: true
    },
    Price: {
        type: Number,
        required: true
    },
    Id: {
        type: Number,
        required: true
    },
    createdTime : {
        type: Date,
        default: Date.now
    }
}
)

module.exports=mongoose.model('Info',infoSchema);