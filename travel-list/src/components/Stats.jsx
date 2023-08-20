import React from "react";

export default function Stats({ items }) {
  const packedItem = items.filter((item) => item.packed === true).length;
  const percentage = (packedItem / items.length) * 100;
  return (
    <div className="w-screen h-1/6 mx-auto flex items-center justify-center text-white bg-blue-500  text-md gap-8  font-mono">
      {`You have ${
        items.length
      } items on your list, and you already packed ${packedItem} items! (${
        items.length ? percentage : ""
      }%) `}
    </div>
  );
}
