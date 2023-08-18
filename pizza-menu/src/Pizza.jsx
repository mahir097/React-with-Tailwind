function Pizza({ item }) {
  const { name, ingredients, price, photoName, soldOut } = item;
  return (
    <div
      className={`flex space-x-8 ${!soldOut ? "cursor-pointer" : ""} ${
        soldOut ? "opacity-50" : ""
      }`}
    >
      <img src={photoName} alt={name} className="w-36 rounded-lg" />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className=" text-2xl font-bold">{name}</h2>
          <p className="text-sm my-2">{ingredients}</p>
        </div>

        <p className="underline">{`${soldOut ? "Sold Out" : price} ${
          soldOut ? "" : "$"
        }`}</p>
      </div>
    </div>
  );
}

export default Pizza;
