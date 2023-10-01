function Card({ card, onClearCard }) {
  const total = card.reduce((acc, item) => acc + item.price, 0);

  if (card.length === 0) return;
  return (
    <div className="ml-auto  mt-2 w-72 rounded-lg border p-4 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Sepet</h2>
      <ul>
        {card.map((item) => (
          <li key={item.id} className="mt-2 flex items-center justify-between">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="text-xl font-semibold">Toplam: {total} TL</p>
      <button
        className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-white transition-all hover:bg-red-600"
        onClick={onClearCard}
      >
        Sepeti Temizle
      </button>
    </div>
  );
}

export default Card;
