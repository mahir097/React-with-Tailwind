import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []); // Sadece bileşen yüklendiğinde çalışsın

  function saveToLocalStorage(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  function handleAddItem(item) {
    const updateItems = [...items, item];
    setItems(updateItems);
    saveToLocalStorage(updateItems);
  }

  function handleToggleItem(item) {
    const toggleItems = items.map((i) =>
      i.id === item.id ? { ...i, packed: !i.packed } : i
    );
    setItems(toggleItems);
    saveToLocalStorage(toggleItems);
  }

  function handleRemoveItem(item) {
    const removeItems = items.filter((i) => i.id !== item.id);
    setItems(removeItems);
    saveToLocalStorage(removeItems);
  }

  return (
    <div className="h-screen w-screen ">
      <div className="h-1/4">
        <Header />
        <Form onAddItem={handleAddItem} />
      </div>
      <div className="h-3/4">
        <PackingList
          items={items}
          onRemoveItem={handleRemoveItem}
          onToggleItem={handleToggleItem}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}
