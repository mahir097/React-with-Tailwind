import React from "react";
import Options from "./Options";

export default function Question({ questions, dispatch, answer }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div className="text-white text-2xl">{questions.question}</div>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}
