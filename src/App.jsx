import "./App.css";
import LineChart from "./components/LineChart/LineChart";
// import Navbar from './components/Navbar/Navbar'
import NavbarMe from "./components/NavbarMe/NavbarMe";
import Phones from "./components/Phones/Phones";
import PriceOptoions from "./components/PriceOptions/PriceOptoions";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavbarMe></NavbarMe>
      {/* <Navbar></Navbar> */}
      <h1 className="text-3xl">Price option</h1>
      <PriceOptoions></PriceOptoions>

      <LineChart></LineChart>

      <Phones></Phones>
    </div>
  );
}

export default App;
