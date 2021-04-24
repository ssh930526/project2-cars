const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const carSchema = new Schema ({
    carName: String,
    origin: String,

    makingYear: {
    type: Date,
    default: function() {
        return new Date().getFullYear();
    }
},

carCylinder: {
    type: [String],
    min: 4,
    max: 10,
},

rating: {
            type: Number,
            min: 1,
            max: 10,
            default: 10
        }
        },{ timestamps: true }
    );


 module.exports = mongoose.model('Car', carSchema);