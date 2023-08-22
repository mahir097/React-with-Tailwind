import React from "react";

export default function NumResult({ movieLength }) {
  return (
    <div className="mr-8 text-white">
      Found <span className="font-bold">{movieLength}</span> results
    </div>
  );
}
