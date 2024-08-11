import { useContext, useEffect, useState } from "react";
import { coinContext } from "./CoinContext";

export function CoinInfo({ name, logo, currPrice, symbol, id }) {
  const [historicalData, setHistoricalData] = useState();

  async function fetchHistoricalData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-pro-api-key": "CG-L8JTpiF51wehCWMrFDvnWHsa",
      },
    };

    fetch(
      `https://pro-api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=30`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricalData(response))
      .catch((err) => console.error(err));
  }
  const { currency } = useContext(coinContext);
  return (
    <div className="h-4/5 bg-gradient-to-r from-blue-800 to-violet-700 w-screen text-white font-sans flex flex-col items-center ">
      <img src={logo} alt="" className="h-1/4 w-1/7 pt-8" />
      <h1 className="text-4xl m-4">{`${name} (${symbol})`}</h1>
      <h2 className="text-3xl">
        Current Price: {`${currPrice}${currency.symbol}`}
      </h2>
    </div>
  );
}
