import { connect } from "@/dbConfig/dbConfig";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import { saveImage } from '@/lib/imageHandler';
connect();


export async function POST(request) {
  

    try {
        const reqBody = await request.json();
        const { name, description, images, category, price } = reqBody;

        if (!name || !description || !images || !category || !price) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        if (!Array.isArray(images) || images.length !== 4) {
            return NextResponse.json({ message: "Exactly 4 images are required." }, { status: 400 });
        }

        // Save images and get their paths
        const imagePaths = await Promise.all(images.map(async (image, index) => {
            const fileName = `product_${Date.now()}_${index}.jpg`;
            return await saveImage(image, fileName);
        }));

        const newProduct = new Product({
            name,
            description,
            images: imagePaths,
            category,
            price,
        });

        const savedProduct = await newProduct.save();

        return NextResponse.json(savedProduct, { status: 201 });
    } catch (error) {
        console.error("Error in POST /api/products:", error);
        return NextResponse.json({ message: "Server error. Please try again later.", error: error.message }, { status: 500 });
    }
}

// ... rest of your code (GET, PUT, DELETE functions) ...

// Retrieve all products
// export async function GET() {
//     try {
//         const products = await Product.find({});
//         return NextResponse.json(products, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
//     }
// }


// export async function GET(request) {
//     const { searchParams } = new URL(request.url);
//     const categories = searchParams.get('categories')?.split(',');

//     const query = categories && categories.length > 0 ? { category: { $in: categories } } : {};

//     try {
//         const products = await Product.find(query);
//         return NextResponse.json(products, { status: 200 });
//     } catch (error) {
//         console.error("Error in GET /api/products:", error);
//         return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
//     }
// }


export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get('search') || '';
    const categories = searchParams.get('categories')?.split(',');

    const query = {
        ...(categories && categories.length > 0 ? { category: { $in: categories } } : {}),
        ...(searchQuery ? { name: { $regex: searchQuery, $options: 'i' } } : {}),
    };

    try {
        const products = await Product.find(query);
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.error("Error in GET /api/products:", error);
        return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
    }
}

