const mongoose = require('mongoose');

//mogoose app connect
const connectionURL = process.env.DATABASE_URL;

const connectionString = 'mongodb+srv://admin:abc1234@sei.ndsut.mongodb.net/mongoose-cars-app?retryWrites=true&w=majority';

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});