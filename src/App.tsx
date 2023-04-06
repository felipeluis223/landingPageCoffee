import HomeImage from "./components/HomeImage";
import HomeMenu from "./components/HomeMenu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <HomeImage />
      <HomeMenu />
    </div>
  );
}

export default App;
