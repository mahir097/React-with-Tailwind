import { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import EditToDo from "./EditToDo";

export default function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  //write local storage

  function saveTolocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  //read local storage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  function handleAddTodo(value) {
    const newTodo = {
      id: Date.now(),
      task: value,
      isEditing: false,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    saveTolocalStorage([...todos, newTodo]);
  }

  function handleToggle(id) {
    const update = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(update);
    saveTolocalStorage(update);
  }

  function handleDelete(id) {
    const update = todos.filter((todo) => todo.id !== id);
    setTodos(update);
    saveTolocalStorage(update);
  }

  function handleEditing(id) {
    const update = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.editing } : todo
    );
    setTodos(update);
    saveTolocalStorage(update);
  }

  function handleEdit(value, id) {
    const update = todos.map((todo) =>
      todo.id === id ? { ...todo, task: value, isEditing: false } : todo
    );
    setTodos(update);
    saveTolocalStorage(update);
  }

  console.log(todos);
  return (
    <div className="mx-auto mt-10  w-2/3  md:w-1/2 xl:w-1/3 md:mt-20 ">
      <div className="flex flex-col items-center justify-center bg-purple-950 text-center rounded-md p-10">
        <ToDoForm onAddTodo={handleAddTodo} />

        {todos.map((todo) => {
          return todo.isEditing ? (
            <EditToDo todo={todo} onEdit={handleEdit} />
          ) : (
            <ToDo
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEditing={handleEditing}
            />
          );
        })}
      </div>
    </div>
  );
}
