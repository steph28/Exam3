var mongoose = require("mongoose");
var Hotel = mongoose.model('Hotel');

module.exports.getAllHotel = function(req, res) {
    console.log("get all hotels");
    Message.find().exec(function(err, messages) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(messages);
        }
    });
}
