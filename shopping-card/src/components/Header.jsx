import CardIcon from "./CardIcon";

function Header({ card }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-semibold">
        React-Tailwind Sepet Uygulaması
      </h1>
      <CardIcon number={card.length} />
    </div>
  );
}

export default Header;
