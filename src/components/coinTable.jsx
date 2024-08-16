import { useContext, useEffect, useRef, useState } from "react";
import { coinContext } from "./CoinContext";
import { CoinInTable } from "./coinInTable";

export function CoinTable() {
  const { allCoins } = useContext(coinContext);

  const [coinsToDisplay, setCoinsToDisplay] = useState(allCoins);
  const [displayedCoins, setDisplayedCoins] = useState([]);

  const style = { height: displayedCoins.length < 3 && "100vh" };

  const inputRef = useRef();

  useEffect(() => {
    setDisplayedCoins(
      coinsToDisplay.map((coin) => {
        if (coin.market_cap_rank > 30) return;
        return (
          <CoinInTable
            number={coin.market_cap_rank}
            name={coin.name}
            logo={coin.image}
            currPrice={coin.current_price}
            priceChangePercentage={coin.price_change_percentage_24h}
            symbol={coin.symbol}
            id={coin.id}
          />
        );
      })
    );
  }, [coinsToDisplay]);

  useEffect(() => {
    setCoinsToDisplay(allCoins);
  }, [allCoins]);

  function searchHandler() {
    setCoinsToDisplay(
      allCoins.filter((coin) =>
        coin.id.includes(inputRef.current.value.toLowerCase())
      )
    );
  }

  return (
    <>
      <div
        style={style}
        className=" w-screen bg-gradient-to-r from-blue-800 to-violet-700 h-fit pb-52"
      >
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
              <th>Price change percentage 24h</th>
            </tr>
            {displayedCoins ? displayedCoins : <p>LOADING</p>}
          </table>
        </div>
      </div>
    </>
  );
}
