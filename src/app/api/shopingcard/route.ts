// pages/api/cart.js
import { connect } from "@/dbConfig/dbConfig";
import Shopingcard from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

connect();

// Fetch shopping cart data and calculate total quantity
export async function GET(request: NextRequest) {
    try {
        // Fetch shopping cart data from the database
        const cartData = await Shopingcard.find();

        // Calculate total quantity
        const totalQuantity = cartData.reduce((total, item) => total + item.quantity, 0);

        return NextResponse.json({ totalQuantity }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
    }
}

// Save a new product to the shopping cart
export async function POST(request: { json: () => any; }) {
    try {
        const reqBody = await request.json();
        const { name, description,  category, price, totalprice } = reqBody;

        if (!name || !description ||  !category || !price || !totalprice) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        const newProduct = new Shopingcard({
            name,
            description,
            category,
            price,
            totalprice,
        });

        const savedProduct = await newProduct.save();

        return NextResponse.json(savedProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
    }
}