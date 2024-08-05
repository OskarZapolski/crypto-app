import { coinContext } from "./CoinContext";
import { useContext } from "react";

export function CoinInTable({
  number,
  name,
  logo,
  currPrice,
  lowPrice,
  highPrice,
}) {
  const { currency } = useContext(coinContext);
  return (
    <tr className="text-center ">
      <td>{number}</td>
      <td className="flex justify-center">
        <img src={logo} alt="" className="w-1/3" />
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
