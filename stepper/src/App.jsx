import React, { useState } from "react";
const steps = ["Step-1", "Step-2", "Step-3"];

const App = () => {
  const [stepNum, setStepNum] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (stepNum > 1) setStepNum((prev) => prev - 1);
  }
  function handleNext() {
    if (stepNum < 3) setStepNum((prev) => prev + 1);
  }
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center ">
      <div className="bg-yellow-600 flex flex-col items-center justify-center p-8 w-200px rounded-3xl">
        <div className="flex space-x-20 mb-10 ">
          <div
            className={`${
              stepNum >= 1
                ? "bg-slate-600 w-10 h-10 p-2 rounded-full text-center  text-white"
                : "bg-slate-200 w-10 h-10 p-2 rounded-full text-center text-black"
            }`}
          >
            1
          </div>
          <div
            className={`${
              stepNum >= 2
                ? "bg-slate-600 w-10 h-10 p-2 rounded-full text-center text-white"
                : "bg-slate-200 w-10 h-10 p-2 rounded-full text-center text-black"
            }`}
          >
            2
          </div>
          <div
            className={`${
              stepNum >= 3
                ? "bg-slate-600 w-10 h-10 p-2 rounded-full text-center text-white"
                : "bg-slate-200 w-10 h-10 p-2 rounded-full text-center text-black"
            }`}
          >
            3
          </div>
        </div>

        <div>
          <div className="text-center -mt-3 mb-5 text-2xl text-white">
            {steps[stepNum - 1]}
          </div>
          <div className="flex justify-between space-x-40">
            <button
              onClick={handlePrev}
              className="bg-white px-4 py-2 rounded-full hover:bg-slate-600 hover:text-white"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="bg-white px-4 py-2 rounded-full hover:bg-slate-600 hover:text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
