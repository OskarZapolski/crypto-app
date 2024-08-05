import "./css/App.css";
import { Navbar } from "./components/navbar";
import { MainContent } from "./components/mainContenst";

function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
