"use client";
import { motion } from "framer-motion";

  function QuizCompletionMessage() {
  return (
    <div className="flex w-full items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-lg text-center"
      >
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You’ve successfully completed the <br />
          <span className="font-semibold text-purple-600">
            MCQ Quiz by Quantum CreferT Studio
          </span>
          .
        </p>
        <p className="text-xl font-medium text-green-600 mb-6">
          🌟 All the Best for Your Future! 🌟
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-indigo-700"
          onClick={() => window.location.href = "/"} // redirect if needed
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}

export {QuizCompletionMessage}
