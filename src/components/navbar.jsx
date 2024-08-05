import { coinContext } from "./CoinContext";
import { useContext } from "react";
export function Navbar() {
  const { setCurrency, currency, allCoins } = useContext(coinContext);

  function currencyHandler(e) {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "pln":
        setCurrency({ name: "pln", symbol: "zł" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  }
  return (
    <>
      <div className="w-screen h-1/5 bg-gradient-to-r from-blue-800/90 to-violet-700/90 flex justify-between items-center">
        <img
          src="cryptocurrency-logo.png"
          alt=""
          className="w-24 h-24 mx-10 cursor-pointer"
        />
        <div className="mx-20">
          <select
            name=""
            id=""
            className="bg-transparent text-white text-2xl border-white border-solid border-2 rounded-lg"
            onChange={currencyHandler}
          >
            <option value="usd" className="bg-black">
              USD
            </option>
            <option value="pln" className="bg-black">
              PLN
            </option>
            <option value="eur" className="bg-black">
              EUR
            </option>
          </select>
        </div>
      </div>
      <hr />
    </>
  );
}
