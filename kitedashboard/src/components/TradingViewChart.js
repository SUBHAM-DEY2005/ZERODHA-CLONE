import React, { useEffect, useRef } from "react";

const TradingViewChart = ({ symbol }) => {
  const container = useRef();
  const chartId = "tv_" + symbol;

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: `NSE:${symbol}`,
        interval: "15",
        timezone: "Asia/Kolkata",
        theme: "light",
        style: "1",
        locale: "en",
        container_id: chartId,
        studies: ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
      });
    };

    container.current.appendChild(script);
  }, [symbol]);

  return (
    <div
      id={chartId}
      ref={container}
      style={{ height: "600px", width: "100%" }}
    />
  );
};

export default TradingViewChart;