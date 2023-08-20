import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);
  console.log(amount);
  console.log(description);

  function handleSubmit(event) {
    event.preventDefault();

    if (description === "") return;

    const newItem = { description, amount, packed: false, id: Date.now() };
    onAddItem(newItem);

    setDescription("");
    setAmount(1);
  }

  return (
    <div className="w-screen flex items-center justify-center space-x-10 bg-red-500 h-1/3">
      <p className="font-semibold">What do you need for your 😍 trip?</p>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <select
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-full text-center p-1 w-16"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => {
            return (
              <option value={number} key={number}>
                {number}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-full  pl-3 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 "
        />
        <button
          type="submit"
          className="bg-blue-400 rounded-full py-2 px-4 uppercase
          hover:bg-blue-500 hover:text-white transition-all"
        >
          Add
        </button>
      </form>
    </div>
  );
}
