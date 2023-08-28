import React from "react";

export default function FinishScreen({
  points,
  maxPoint,
  dispatch,
  highscore,
}) {
  const percentage = (points / maxPoint) * 100;
  return (
    <div className="text-white text-2xl flex flex-col gap-16">
      <div>
        You scored <span className="font-bold">{points}</span> out of {maxPoint}{" "}
        ({percentage.toFixed(0)}%)
      </div>
      <div className="text-sm -mt-10">(Highscore: {highscore} points)</div>

      <div>
        <button
          onClick={() => dispatch({ type: "restart" })}
          className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 hover:scale-105 transition-all"
        >
          Restart quiz
        </button>
      </div>
    </div>
  );
}
