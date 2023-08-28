import React from "react";

export default function StartScreen({ length, dispatch }) {
  return (
    <div className="text-white mt-10 flex flex-col items-center justify-center space-y-10">
      <h1 className="text-3xl font-bold">Welcome to The React Quiz!</h1>
      <p className="text-xl">{length} questions to test your React mastery</p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="bg-gray-700 px-6 py-4 rounded-full
      hover:bg-gray-900 hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Let's start
      </button>
    </div>
  );
}
