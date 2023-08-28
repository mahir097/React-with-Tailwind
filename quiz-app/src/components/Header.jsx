import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-center space-x-5 mb-10 mt-5">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
        alt="React Logo"
        className="w-32"
      />
      <p className="text-white uppercase font-sans text-5xl">The React Quiz</p>
    </div>
  );
}
