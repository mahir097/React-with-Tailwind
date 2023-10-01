function ProductItem({ product, card, setCard }) {
  const findProduct = card.includes(product);
  return (
    <div className="m-2 rounded-lg border p-4 shadow-lg">
      <img
        className="h-48 w-full rounded-t-lg object-cover"
        src={product.image}
        alt="product image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
        <p className="my-2 text-gray-500">{product.price}</p>
        <button
          className={`w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 ${
            findProduct && "cursor-not-allowed opacity-50"
          }`}
          onClick={() => setCard([...card, product])}
          disabled={findProduct}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
