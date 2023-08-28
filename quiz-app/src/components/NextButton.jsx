import React from "react";

export default function NextButton({ index, answer, dispatch, length }) {
  if (answer === null) return null;

  if (index < length - 1)
    return (
      <div className="flex justify-end mt-5">
        <button
          className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 text-white hover:scale-105 transition-all"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          NextButton
        </button>
      </div>
    );

  if (index === length - 1)
    return (
      <div className="flex justify-end mt-5">
        <button
          className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 text-white hover:scale-105 transition-all"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
}
