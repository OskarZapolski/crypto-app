import { useContext } from "react";
import { coinContext } from "./CoinContext";
import { CoinInTable } from "./coinInTable";

export function CoinTable() {
  const { allCoins } = useContext(coinContext);

  const allCoinsInTable = allCoins.map((coin) => {
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
  });
  console.log(allCoinsInTable);
  return (
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
        {allCoinsInTable}
      </table>
    </div>
  );
}
