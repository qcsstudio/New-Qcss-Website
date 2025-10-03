import { NextResponse } from "next/server";
import connectMongo from '@/lib/mongodb';
import candidate from "@/models/candidate";
import mongoose from "mongoose";
export async function POST(req) {
  try {
    await connectMongo();
    const data = await req.json();
    if (!data.email) {
      return NextResponse.json({ error: 'Email Is Required' }, { status: 404 });
    }
    const candidateData = await candidate.create({
      fullName: data?.fullName,
      email: data?.email,
      contact_Number: data?.contact_Number,
      address: data?.address,
      collegeName: data?.collegeName,
      course: "",
      carrer_option: "",
    })

    return NextResponse.json({ candidateData }, { status: 201 });


  } catch (error) {
    console.log("Candtii", error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectMongo();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const candidateData = await candidate.aggregate(
      [
        {
          $match: {
            _id: new mongoose.Types.ObjectId(id)
          }
        },
        {
          $lookup: {
            from: "quizresults",
            let: { candidate_id: "$_id", category_id: "$categoryId" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$candidate_id", "$$candidate_id"] },
                      { $eq: ["$category_id", "$$category_id"] }
                    ]
                  }
                }
              },
               {
                $project:{
                  status:1
                }
          }
            ],
            as: "result"
          }
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true
          }
        }
      ]
    );
    if (!candidateData) {
      return NextResponse.json({ error: "Candidate not found" }, { status: 404 });
    }

    return NextResponse.json({ candidateData:candidateData[0]}, { status: 200 });
  } catch (error) {
    console.error("Error fetching candidate:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectMongo();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const categoryId = searchParams.get("catId");
    const candidateData = await candidate.findById(id);

    if (!candidateData) {
      return NextResponse.json({ error: "Candidate not found" }, { status: 404 });
    }
    const updated = await candidate.findByIdAndUpdate(
      id,
      { $set: { categoryId: categoryId } },
      { new: true }
    );

    return NextResponse.json({ updated }, { status: 200 });
  } catch (error) {
    console.error("Error fetching candidate:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}