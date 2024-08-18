import "./css/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppBody } from "./components/appBody";
import { createContext, useState } from "react";
import { CoinInfo } from "./components/coinInfo";

export const CoinCLickedContext = createContext();
function App() {
  const [isCoinClicked, setIsCoinClicked] = useState({
    isClicked: false,
    coinObject: {},
  });
  const value = { isCoinClicked, setIsCoinClicked };

  return (
    <div className="h-screen overflow-x-hidden">
      <BrowserRouter>
        <CoinCLickedContext.Provider value={value}>
          <Routes>
            <Route path="/crypto-app/" element={<AppBody />} />
            <Route
              exact
              path={`/crypto-app/${isCoinClicked.coinObject.name}`}
              element={
                <CoinInfo
                  name={isCoinClicked.coinObject.name}
                  logo={isCoinClicked.coinObject.logo}
                  symbol={isCoinClicked.coinObject.symbol}
                  currPrice={isCoinClicked.coinObject.currPrice}
                  id={isCoinClicked.coinObject.id}
                />
              }
            />
          </Routes>
        </CoinCLickedContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
