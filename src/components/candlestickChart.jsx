import { useEffect, useState } from "react";
import Chart from "react-google-charts";
export function CandlestickChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Open", "High", "Low", "Close"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Open", "High", "Low", "Close"]];
    if (historicalData) {
      historicalData.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
          item[2],
          item[3],
          item[4],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);
  return (
    <Chart
      chartType="CandlestickChart"
      data={data}
      height="100%"
      legendToggle
    />
  );
}
