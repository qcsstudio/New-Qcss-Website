import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import QuizCategory from "@/models/quizCategory";
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        await connectMongo()
        const categoriesList = await QuizCategory.findById(id)
        return NextResponse.json(
            {
                message: "Category created successfully",
                data: categoriesList,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Category Error:", error);
        return NextResponse.json(
            { message: "Category creation failed", error: error.message },
            { status: 500 }
        );
    }
}


