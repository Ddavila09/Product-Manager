const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be 5 characters long or longer"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Rating needs to be between 0 - 9999"],
        max: [9999, "Rating needs to be between 0 - 9999"]
    },
    description:{
        type: String,
        minlength: [10, "Description must be 10 characters or longer"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
