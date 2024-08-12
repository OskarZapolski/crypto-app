import { useContext, useEffect, useState } from "react";
import { coinContext } from "./CoinContext";
import { CandlestickChart } from "./candlestickChart";

export function CoinInfo({ name, logo, currPrice, symbol, id }) {
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(coinContext);

  async function fetchHistoricalData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "  CG-L8JTpiF51wehCWMrFDvnWHsa",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=${currency.name}&days=7`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoricalData(response))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchHistoricalData();
  }, [currency]);

  console.log(historicalData);
  return (
    <div className="h-4/5 bg-gradient-to-r from-blue-800 to-violet-700 w-screen text-white font-sans flex flex-col items-center ">
      <img src={logo} alt="" className="h-1/4 w-1/7 pt-8" />
      <h1 className="text-4xl m-4">{`${name} (${symbol})`}</h1>
      <h2 className="text-3xl">
        Current Price: {`${currPrice}${currency.symbol}`}
      </h2>
      <div className="h-1/3 w-1/2">
        <CandlestickChart historicalData={historicalData} />
      </div>
    </div>
  );
}
