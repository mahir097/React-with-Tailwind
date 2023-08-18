import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Data from "./Data";

export default function App() {
  return (
    <div>
      <Header />
      <Menu data={Data} />
      <Footer />
    </div>
  );
}
