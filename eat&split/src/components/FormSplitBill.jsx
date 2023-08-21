import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({
  selectedFriend,
  onSplitBill,
  setIsSelectedFriend,
}) {
  const [bill, setBill] = useState();
  const [yourExpense, setYourExpense] = useState();
  const friendsExpense = bill ? Number(bill) - Number(yourExpense) : "";
  const [whoPaid, setWhoPaid] = useState("you");
  const { name } = selectedFriend;

  let debt = 0;

  if (whoPaid === "you") debt = friendsExpense;
  if (whoPaid !== "you") debt = -friendsExpense;

  function handleSubmit(e) {
    e.preventDefault();
    onSplitBill(debt);
    setBill("");
    setYourExpense("");
  }

  return (
    <div className="w-96 bg-red-100 ">
      <span
        onClick={() => setIsSelectedFriend(false)}
        className="p-5 inline-block cursor-pointer"
      >
        ✖
      </span>
      <h1 className="text-2xl font-bold text-center pb-10">Split Bill</h1>
      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between px-10 pb-2">
          <label htmlFor="payment">💰 Bill value</label>
          <input
            id="payment"
            type="text"
            className="w-32 rounded-lg "
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between px-10 pb-2 ">
          <label htmlFor="expense">🧍‍♂️ Your expense</label>
          <input
            id="expense"
            type="text"
            className="w-32 rounded-lg"
            value={yourExpense}
            onChange={(e) => setYourExpense(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between px-10 pb-2">
          <label htmlFor="name">{`👫 ${name}'s expense`}</label>
          <input
            id="name"
            type="text"
            className="w-32 rounded-lg"
            value={friendsExpense}
            disabled
          />
        </div>
        <div className="flex items-center justify-between px-10 pb-2">
          <label htmlFor="payment">💰 Bill value</label>
          <select
            value={whoPaid}
            onChange={(e) => setWhoPaid(e.target.value)}
            className="w-32 rounded-lg text-center"
          >
            <option value="you">You</option>
            <option value="friend">{name}</option>
          </select>
        </div>

        <div className="flex items-center justify-end p-5 pr-10">
          <Button>Split Bill</Button>
        </div>
      </form>
    </div>
  );
}
