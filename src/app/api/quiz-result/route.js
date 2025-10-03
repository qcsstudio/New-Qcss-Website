import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import quizResult from "@/models/quizResult";

import quizQuestion from "@/models/quizQuestion";
export async function POST(req) {
    try {
        await connectMongo();
        const body = await req.json();

        const { candidate_id, category_id, answers } = body;
        if (!candidate_id || !category_id) {
            return NextResponse.json(
                { message: "candidate_id, category_id, total_questions, and correct_answers are required" },
                { status: 400 }
            );
        }

        const correctAnswers = answers.filter(a => a.is_correct).length;

        const totalQuestionsInCategory = await quizQuestion.countDocuments({
            category_id: category_id
        });


        const percentage = ((correctAnswers / totalQuestionsInCategory) * 100).toFixed(2);
        const wrong_answers = totalQuestionsInCategory - correctAnswers;
        let grade;
        if (percentage >= 90) grade = "A";
        else if (percentage >= 75) grade = "B";
        else if (percentage >= 60) grade = "C";
        else if (percentage >= 40) grade = "D";
        else grade = "F";

        const result = await quizResult.create({
            candidate_id,
            category_id,
            status: "Ended",
            answers,
            total_questions: totalQuestionsInCategory,
            correct_answers: correctAnswers,
            wrong_answers,
            percentage,
            grade
        });


        
        return NextResponse.json(
            {
                message: "Result saved successfully",
                result_data: {
                    total_questions: result.total_questions,
                    correct_answers: result.correct_answers,
                    wrong_answers: result.wrong_answers,
                    percentage: result.percentage,
                    grade: result.grade,
                    attempted_on: result.attempted_on
                }
            },
            { status: 201 }
        );
    } catch (error) {
        console.log("Category Error:", error);
        return NextResponse.json(
            { message: "Category creation failed", error: error.message },
            { status: 500 }
        );
    }
}









