import { coinContext } from "./CoinContext";
import { useContext, useEffect } from "react";
import { CoinCLickedContext } from "./mainContent";
import { useNavigate } from "react-router-dom";

export function CoinInTable({
  number,
  name,
  logo,
  currPrice,
  lowPrice,
  highPrice,
  symbol,
  id,
}) {
  const nav = useNavigate();
  const { currency } = useContext(coinContext);
  const { isCoinClicked, setIsCoinClicked } = useContext(CoinCLickedContext);
  return (
    <tr className="text-center ">
      <td>{number}</td>
      <td
        className="flex justify-center"
        onClick={() => {
          setIsCoinClicked({
            isClicked: true,
            coinObject: { name, logo, currPrice, symbol, id },
          });
          nav(`/${name}`);
        }}
      >
        <img src={logo} alt="" className="w-1/3 cursor-pointer" />
      </td>
      <td>{name}</td>
      <td>
        {currPrice}
        {currency.symbol}
      </td>
      <td>
        {lowPrice}
        {currency.symbol}
      </td>
      <td>
        {highPrice}
        {currency.symbol}
      </td>
    </tr>
  );
}
