import React, { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, onRemoveItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  console.log(sortedItems);

  return (
    <div className=" h-5/6 bg-red-900 mx-auto text-white overflow-y-auto relative">
      <div className="w-3/4  mx-auto ">
        <div className="flex justify-center items-center h-16 text-black">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Order By Input</option>
            <option value="desc">Order By Description</option>
            <option value="packed">Order By Packed Status</option>
          </select>
        </div>

        <div className=" text-center pt-10 flex flex-wrap items-center justify-center   gap-10">
          {sortedItems.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                onRemoveItem={onRemoveItem}
                onToggleItem={onToggleItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
