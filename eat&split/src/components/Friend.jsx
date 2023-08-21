import React from "react";
import Button from "./Button";

export default function Friend({
  friends,
  onShowAddFriend,
  showAddFriend,
  onSelectedFriend,
  selectedFriend,
  onRemoveFriend,
}) {
  return (
    <div className="w-96 ">
      {friends.map((friend) => {
        const { id, name, image, balance } = friend;

        const debtStatus = () => {
          if (balance > 0) return `${name} owes you ${balance}$`;
          if (balance < 0) return `You owe ${name} ${-balance}$`;
          return "You are even";
        };
        return (
          <div
            key={id}
            className={`flex py-6 items-center justify-between hover:bg-orange-100 transition-all duration-300 rounded-xl px-5 ${
              selectedFriend.id === id ? "bg-orange-200" : ""
            }`}
          >
            <div
              className={`flex space-x-5 ${
                balance > 0 ? " text-red-500" : ""
              } ${balance < 0 ? " text-green-500" : ""}`}
            >
              <img src={image} alt={name} className="rounded-xl" />
              <div>
                <div>{name}</div>
                <div>{debtStatus()}</div>
              </div>
            </div>
            <div className="flex items-center ">
              <Button onClick={() => onSelectedFriend(friend)}>Select</Button>
              <span
                onClick={() => onRemoveFriend(id)}
                className="cursor-pointer"
              >
                ❌
              </span>
            </div>
          </div>
        );
      })}

      <div className="flex justify-end mt-3 mr-11">
        {showAddFriend ? "" : <Button onClick={onShowAddFriend}>Add</Button>}
      </div>
    </div>
  );
}
