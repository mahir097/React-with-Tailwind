import React from "react";

export default function Item({ item, onRemoveItem, onToggleItem }) {
  const { packed } = item;

  console.log(item);
  return (
    <div className="flex  items-center justify-center  space-x-2 border-solid border-2 rounded-xl  p-2">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item)}
      />
      <span>{`${item.amount}- `}</span>
      <div
        className={`w-auto flex break-words pr-2 
      ${packed ? "line-through" : ""}`}
      >
        {item.description}
      </div>
      <button onClick={() => onRemoveItem(item)}>❌</button>
    </div>
  );
}
