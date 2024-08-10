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
    <div className=" w-screen bg-gradient-to-r from-blue-800 to-violet-700 h-fit pb-52">
      <BrowserRouter>
        <CoinCLickedContext.Provider value={value}>
          <Routes>
            <Route exact path="/" element={<CoinTable />} />
            <Route
              exact
              path={`/${isCoinClicked.coinObject.name}`}
              element={<CoinInfo />}
            />
          </Routes>
        </CoinCLickedContext.Provider>
      </BrowserRouter>
    </div>
  );
}
