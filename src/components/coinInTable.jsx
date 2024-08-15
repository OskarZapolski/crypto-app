import { coinContext } from "./CoinContext";
import { useContext, useEffect } from "react";
import { CoinCLickedContext } from "../App";
import { useNavigate } from "react-router-dom";

export function CoinInTable({
  number,
  name,
  logo,
  currPrice,
  lowPrice,
  highPrice,
  symbol,
  priceChangePercentage,
  id,
}) {
  const style = {
    color:
      priceChangePercentage > 0
        ? "rgb(92, 255, 47)"
        : priceChangePercentage === 0
        ? "white"
        : "rgb(251, 78, 78)",
  };
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
        {currency.symbol} {currPrice}
      </td>
      <td style={style}>{Math.round(priceChangePercentage * 100) / 100}%</td>
    </tr>
  );
}
