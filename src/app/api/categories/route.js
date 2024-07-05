import { NextResponse } from "next/server";
import Product from "@/models/Product"; // Adjust the path based on your project structure

export async function GET(request) {
    try {
        const categoryCounts = await Product.aggregate([
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: "$_id",
                    count: 1
                }
            }
        ]);

        return NextResponse.json(categoryCounts, { status: 200 });
    } catch (error) {
        console.error("Error in GET /api/categories:", error);
        return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
    }
}