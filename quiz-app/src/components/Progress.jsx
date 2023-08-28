import React from "react";

export default function Progress({ length, index, answer, points, maxPoint }) {
  return (
    <div className="flex flex-col items-center  space-y-5 text-white text-lg mb-10">
      <progress
        max={length}
        value={index + Number(answer !== null)}
        className="w-[400px] "
      />
      <div className="w-[400px] flex items-center justify-between">
        <div>
          Question {index + 1} / {length}
        </div>
        <div>
          {points} / {maxPoint}
        </div>
      </div>
    </div>
  );
}
