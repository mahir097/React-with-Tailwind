import { useState } from "react";

export default function ToDo({ onAddTodo }) {
  const [value, setValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(value);
  // };

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    onAddTodo(value);
    setValue("");
  }

  return (
    <div className="w-5/6 mx-auto">
      <div>
        <h1 className="text-white text-4xl pb-5">To Do List</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mb-5"
      >
        <input
          type="text"
          placeholder="Add a new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-5/6 border-2 border-purple-950 py-1 px-3 outline-none rounded-l-md "
        />
        <button
          type="submit"
          className=" bg-purple-500 py-1 px-3 rounded-r-md -ml-1"
        >
          Add
        </button>
      </form>
    </div>
  );
}
