const express = require('express');
const chalk = require('chalk');
const { initConnection } = require('./utils/mongoUtil');
require('dotenv').config()

// user routes
const userRoutes = require('./routes/user.route')


const app = express();
const PORT = process.env.PORT || 4500

// express.json() :  is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
// express.urlemcoded() : is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// user auth routes
app.use('/api', userRoutes)
    // other routes goes here.



// start server
app.listen(PORT, () => {
    console.log(chalk.green.inverse.bold(`Express app listening on.........PORT :  ${PORT}`))
    console.log(chalk.blue.bold("Connecting to mongodb..."))
    initConnection()
})