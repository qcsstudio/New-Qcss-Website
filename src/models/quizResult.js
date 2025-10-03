import mongoose from "mongoose";
const answerSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizQuestion",
    required: true,
  },
  selected_option: {
    type: String, // "A", "B", "C", "D"
    required: true,
  },
  is_correct: {
    type: Boolean,
    required: true,
  },
});
const resultSchema = new mongoose.Schema({
  candidate_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuizCategory",
    required: true,
  },
  status: {
  type:String,
  default:""
  },
  answers: [answerSchema],
  total_questions: Number,
  correct_answers: Number,
  wrong_answers: Number,
  percentage: Number,
  grade: String,
  attempted_on: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.models.Quizresult || mongoose.model("Quizresult", resultSchema);