import "./css/App.css";
import { Navbar } from "./components/navbar";
import { MainContent } from "./components/mainContent";
import { useContext } from "react";
import { coinContext } from "./components/CoinContext";

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
