import React from "react";

export default function NavBar({ children }) {
  return (
    <div className="container  h-16 mt-2  text-center mx-auto flex items-center justify-between bg-purple-700 rounded-xl">
      {children}
    </div>
  );
}
