import React from "react";

export default function Search({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        className="w-32 h-10 rounded-xl px-5 text-white bg-purple-500 outline-none transform  focus:-translate-y-1 focus:shadow-xl transition-all sm:w-56 md:w-80 placeholder:text-gray-400"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
