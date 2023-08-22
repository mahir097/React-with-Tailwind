import React, { Children, useState } from "react";

export default function Box({ children, search }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative w-1/2 h-[calc(100vh-100px)]  text-center rounded-xl -mt-3 ">
      {search && search.length > 2 && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-1 top-3"
        >
          {!isOpen ? "➕" : "✖"}
        </button>
      )}

      {isOpen && children}
    </div>
  );
}
