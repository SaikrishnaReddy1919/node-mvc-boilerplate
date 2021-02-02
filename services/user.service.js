var User = require("../models/user.model");

exports.getUsers = async function() {
    try {
        var users = await User.find();
        return users;
    } catch (e) {
        // Log Errors
        throw Error("Error while Paginating Users");
    }
};

// ? service gets data from the controller and  is reposnible to interact with database models get data filter data etc.. and send data to the controller.