import CartButton from "./components/Cart";
import Footer from "./components/Footer";
import HomeImage from "./components/HomeImage";
import HomeMenu from "./components/HomeMenu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <HomeImage />
      <HomeMenu />
      <Footer />
      <CartButton />
    </div>
  );
}

export default App;
