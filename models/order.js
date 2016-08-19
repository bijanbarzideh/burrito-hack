var mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    streetAddress: String,
    city: String,
    zipCode: Number,
    phone: String,
    burrito: String
})

module.exports = mongoose.model("Order", orderSchema);
