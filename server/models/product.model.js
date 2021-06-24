const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,  //this is the validation for a product
        required: [ true, "You must have a title for a product"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [5, "The product title must be at least 5 characters long"],
        unique: [true, "Title must be unique"],
    },

    price: {
        type: Number,
        required: [ true, "The product must have a price"],
        min: [ 0, "Product cannot be free, you must indicate a price for it to be valid"],
    },

    description: {
        type: String, 
        required: [ true, "You must have a description for the product"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [10, "The product description must be at least 10 characters long"],
    },

},
{ timestamps: true }); // need it! this is the options of the Schema, required

// the string to export that you use here is the name of the collection inside of the db
// the collection name will be lowercase, regardless of how you type it
// 2nd piece to export is the schema
module.exports = mongoose.model("Product", ProductSchema);