import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [isSelectedFriend, setIsSelectedFriend] = useState(false);

  useEffect(() => {
    const newFriends = JSON.parse(localStorage.getItem("friends"));
    if (newFriends) {
      setFriends(newFriends);
    }
  }, []);

  const saveToLocalStorage = (newFriends) => {
    localStorage.setItem("friends", JSON.stringify(newFriends));
  };

  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  function handleAddFriend(friend) {
    setFriends((prev) => [...prev, friend]);
    saveToLocalStorage([...friends, friend]);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend(() => friend);
    setIsSelectedFriend(() => true);
  }

  function handleSplitBill(payment) {
    const newFriends = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        return {
          ...friend,
          balance: friend.balance + payment,
        };
      }
      return friend;
    });
    setFriends(newFriends);
    saveToLocalStorage(newFriends);
  }

  function handleRemoveFriend(id) {
    const newFriends = friends.filter((friend) => friend.id !== id);
    setFriends(newFriends);
    saveToLocalStorage(newFriends);
  }

  return (
    <div className="w-screen h-screen ">
      <nav className="flex h-16 items-center justify-center  font-mono text-4xl bg-orange-100">
        Eat & Split
      </nav>
      <div className=" flex h-[calc(100vh-64px)] justify-center mx-auto pt-10 gap-10  bg-sky-200">
        <div className="-mt-5">
          <FriendList>
            <Friend
              friends={friends}
              onShowAddFriend={handleShowAddFriend}
              showAddFriend={showAddFriend}
              onSelectedFriend={handleSelectFriend}
              selectedFriend={selectedFriend}
              onRemoveFriend={handleRemoveFriend}
            />
          </FriendList>

          {showAddFriend ? (
            <div className="">
              <FormAddFriend onAddFriend={handleAddFriend} />
              <div className="flex justify-end mt-3 w-96 pr-10">
                <Button onClick={handleShowAddFriend}>Close</Button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {isSelectedFriend ? (
          <div className="">
            <FormSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
              setIsSelectedFriend={setIsSelectedFriend}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
