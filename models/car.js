const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const reviewSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 10
    }
    },{ timestamps: true }
);


const carSchema = new Schema ({
    title: {
        type: String
},
    makeYear: {
    type: Date,
    default: function() {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        return date;
    }
},

carCylinder: {
    type: [String],
    min: 4,
    max: 10
},

reviews: [reviewSchema] 
}, {
    timestamps: true
});

 module.exports = mongoose.model('Car', carSchema);