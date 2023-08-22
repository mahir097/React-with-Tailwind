import React from "react";

export default function Main({ children }) {
  return (
    <div className="w-5/6 md:w-2/3 lg:w-3/5 xl:w-1/2  mx-auto flex gap-5 ">
      {children}
    </div>
  );
}
