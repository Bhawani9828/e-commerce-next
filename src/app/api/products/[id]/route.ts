import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import mongoose from 'mongoose';

connect();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    console.log("Received ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("Invalid ObjectId");
        return NextResponse.json({ message: "Invalid product ID." }, { status: 400 });
    }

    try {
        console.log("Attempting to find product with ID:", id);
        const product = await Product.findById(id);

        if (!product) {
            console.log("Product not found");
            return NextResponse.json({ message: "Product not found." }, { status: 404 });
        }

        console.log("Product found:", product);
        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        console.error("Error in GET /api/products/[id]:", error);
        return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
    }
}


// export async function GET(request: Request, { params }: { params: { id: string } }) {
//     try {
//       const client = await clientPromise
//       const db = client.db("nextproject")
//       const product = await db.collection("products").findOne({ _id: new ObjectId(params.id) })
  
//       if (!product) {
//         return NextResponse.json({ error: 'Product not found' }, { status: 404 })
//       }
  
//       return NextResponse.json(product)
//     } catch (error) {
//       console.error('Error fetching product:', error)
//       return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//     }
//   }