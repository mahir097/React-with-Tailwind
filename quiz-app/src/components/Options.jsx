import React from "react";

export default function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="w-[500px]  flex flex-col gap-5">
      {questions.options.map((option, index) => {
        const isCorrect = index === questions.correctOption;
        return (
          <button
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`text-start bg-gray-500 text-white text-xl py-2 pl-6 rounded-full cursor-pointer hover:scale-105 transform transition-all ${
              hasAnswered && isCorrect && "bg-green-500"
            }
            ${hasAnswered && !isCorrect && "bg-orange-600"} `}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
