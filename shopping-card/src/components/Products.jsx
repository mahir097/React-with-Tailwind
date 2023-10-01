import ProductItem from "./ProductItem";
import productData from "../productData";

function Products({ card, setCard }) {
  return (
    <div className="mb-8 grid grid-cols-3 gap-10">
      {productData.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          card={card}
          setCard={setCard}
        />
      ))}
    </div>
  );
}

export default Products;
