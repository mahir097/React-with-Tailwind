import React, { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      id: crypto.randomUUID(),
      name: name,
      image: `https://i.pravatar.cc/48?u=${crypto.randomUUID()}`,
      balance: 0,
    };

    if (!name) return alert("Please enter a name");

    onAddFriend(newFriend);
    setName("");
  }

  return (
    <div className="bg-orange-100 w-96 mt-5 rounded-xl">
      <form className="flex flex-col gap-5 p-8 " onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <div>👫 Friend Name</div>
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>🖼 Image URL</div>
          <div>
            <input
              type="text"
              placeholder="https://i.pravatar.cc/48"
              disabled
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Add Friend</Button>
        </div>
      </form>
    </div>
  );
}
