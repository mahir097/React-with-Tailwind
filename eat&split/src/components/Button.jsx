import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-orange-300 flex justify-center items-center  py-2 px-8 rounded-xl font-semibold hover:bg-orange-400 transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
