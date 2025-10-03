import mongoose from "mongoose";

const ChatBoatSchema = new mongoose.Schema(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true },
        files: [
            {
                fileName: { type: String },
                fileUrl: { type: String }, 
                fileType: { type: String },
            },
        ],
        ipAddress: { type: String },
        browserInfo: { type: String },
        sessionId: { type: String },
    },
    { timestamps: true }
);

export default mongoose.models.Chat || mongoose.model("BoatChats", ChatBoatSchema);
