import { createContext, useEffect, useState } from "react";

export const coinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

  useEffect(() => {
    fetchCoinData();
    return fetchCoinData;
  }, [currency]);

  async function fetchCoinData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-L8JTpiF51wehCWMrFDvnWHsa",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setAllCoins(response))
      .catch((err) => console.error(err));
  }
  const contextValue = { allCoins, currency, setCurrency };
  return (
    <coinContext.Provider value={contextValue}>
      {props.children}
    </coinContext.Provider>
  );
};

export default CoinContextProvider;
