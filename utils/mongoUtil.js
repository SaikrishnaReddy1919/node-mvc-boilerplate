const mongoose = require("mongoose");
const chalk = require('chalk')
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

exports.initConnection = () => {
    mongoose.connect(process.env.MONGO_URI, options, (err, db) => {
        if (err) {
            console.log(chalk.red.bold("Error in connecting to db"));
            throw err;
        }
        console.log(chalk.green.inverse.bold("App is connected to MONGODB...😆 "));
    });
};
//utility tasks that u use regularly can be declared here. ex:sending mails,db-connection etc..