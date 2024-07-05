// /models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],  // Array of strings
        required: true,
     
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

function arrayLimit(val) {
    return val.length === 4;
}
mongoose.models = {};
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
