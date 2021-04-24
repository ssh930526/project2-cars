const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ratingSchema = new Schema({
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
    carName: {
        type: String
},
    origin: {
        type: String
},
    makingYear: {
    type: Date,
    default: function() {
        return new Date().getFullYear();
    }
},

Carcylinder: {
    type: [String],
    min: 4,
    max: 10
},

ratings: [ratingSchema] 
}, {
    timestamps: true
});

 module.exports = mongoose.model('Car', carSchema);