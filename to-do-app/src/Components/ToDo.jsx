export default function ToDo({ todo, onToggle, onDelete, onEditing }) {
  return (
    <div className="w-5/6 my-1 ">
      <div className="flex items-center justify-between bg-purple-600 text-white py-2 mx-1  rounded-md">
        <div className="flex w-5/6 gap-2 pl-1">
          <span onClick={() => onToggle(todo.id)} className="cursor-pointer">
            {todo.completed ? "🟠" : "🟢"}
          </span>
          <p className={`${todo.completed ? "line-through" : ""} `}>
            {todo.task}
          </p>
        </div>

        <div className="flex w-1/6 items-center justify-around -space-x-3">
          <span onClick={() => onEditing(todo.id)} className="cursor-pointer">
            ↗
          </span>
          <span onClick={() => onDelete(todo.id)} className="cursor-pointer">
            🗑
          </span>
        </div>
      </div>
    </div>
  );
}
