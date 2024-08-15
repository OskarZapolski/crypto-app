import { useContext, useEffect, useState } from "react";
import Chart from "react-google-charts";
import { coinContext } from "./CoinContext";

export function CandlestickChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Open", "High", "Low", "Close"]]);
  const { currency } = useContext(coinContext);

  useEffect(() => {
    let dataCopy = [["Date", "Open", "High", "Low", "Close"]];
    if (historicalData) {
      historicalData.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[3],
          item[1],
          item[4],
          item[2],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);
  const options = {
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
      risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
    },
    vAxis: { title: `value in ${currency.name}` },
  };
  return (
    <Chart
      chartType="CandlestickChart"
      data={data}
      height="100%"
      legendToggle
      options={options}
    />
  );
}
