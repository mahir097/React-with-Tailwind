import { FiShoppingCart } from "react-icons/fi";

function CardIcon({ number }) {
  return (
    <div className="relative">
      <FiShoppingCart className="text-2xl" />
      {number > 0 && (
        <span className="absolute -right-4 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {number}
        </span>
      )}
    </div>
  );
}

export default CardIcon;
