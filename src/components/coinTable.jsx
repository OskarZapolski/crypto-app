import { useContext, useEffect, useRef, useState } from "react";
import { coinContext } from "./CoinContext";
import { CoinInTable } from "./coinInTable";

export function CoinTable() {
  const { allCoins } = useContext(coinContext);

  const [coinsToDisplay, setCoinsToDisplay] = useState(allCoins);
  const [displayedCoins, setDisplayedCoins] = useState();

  const inputRef = useRef();

  useEffect(() => {
    setDisplayedCoins(
      coinsToDisplay.map((coin) => {
        if (coin.market_cap_rank > 30) return;
        return (
          <CoinInTable
            number={coin.market_cap_rank}
            name={coin.id}
            logo={coin.image}
            currPrice={coin.current_price}
            lowPrice={coin.low_24h}
            highPrice={coin.high_24h}
          />
        );
      })
    );
  }, [coinsToDisplay]);

  function searchHandler() {
    setCoinsToDisplay(
      allCoins.filter((coin) => coin.id.includes(inputRef.current.value))
    );
  }

  return (
    <>
      <div className="w-screen flex justify-center items-center pt-12">
        <input
          placeholder="search"
          type="search"
          className="border-none focus:outline-none rounded-xl text-xl p-2 w-3/5"
          onChange={searchHandler}
          ref={inputRef}
        />
      </div>
      <div className="w-screen flex justify-center">
        <table className="w-4/5 text-white mt-10 bg-white/10 rounded-xl p-5  border-separate border-spacing-y-7 text-xl font-sans">
          <tr>
            <th>Number</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Current price</th>
            <th>Lowest price 24h</th>
            <th>Highest price 24h</th>
          </tr>
          {displayedCoins}
        </table>
      </div>
    </>
  );
}
