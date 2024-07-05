// /models/Product.js
import mongoose from "mongoose";

const shopingcardSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
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
    totalprice:{
        type: Number,
        required: true,
    }
});

const Shopingcard = mongoose.models.shopingcard || mongoose.model("shopingcard", shopingcardSchema);

export default Shopingcard;