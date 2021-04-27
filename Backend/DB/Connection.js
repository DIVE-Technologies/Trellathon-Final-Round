const mongoose = require('mongoose');

const URI = process.env.mongoURL;

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifieldTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log('Database is connected....!');
}

module.exports = connectDB;