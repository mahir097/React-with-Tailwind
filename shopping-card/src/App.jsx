import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [card, setCard] = useState([]);

  const handleClearCard = () => {
    setCard([]);
  };
  return (
    <div className="container mx-auto p-4">
      <Header card={card} />
      <Products card={card} setCard={setCard} />
      <Card card={card} onClearCard={handleClearCard} />
    </div>
  );
}

export default App;
