import { createContext, useEffect, useState } from "react";
import { CoinTable } from "./coinTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoinInfo } from "./coinInfo";

export const CoinCLickedContext = createContext();

export function MainContent() {
  const [isCoinClicked, setIsCoinClicked] = useState({
    isClicked: false,
    coinObject: {},
  });
  const value = { isCoinClicked, setIsCoinClicked };
  return (
    <BrowserRouter>
      <CoinCLickedContext.Provider value={value}>
        <Routes>
          <Route exact path="/" element={<CoinTable />} />
          <Route
            exact
            path={`/${isCoinClicked.coinObject.name}`}
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
  );
}
