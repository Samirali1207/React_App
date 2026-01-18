import React from "react";
import "./MarckeTicker.css";

const data = [
    { name: "EUR/USD", price: "1.16110", change: "+0.00 (+0.04%)", positive: true },
    { name: "Bitcoin", price: "95,612", change: "+35.00 (+0.04%)", positive: true },
    { name: "Ethereum", price: "3,310.1", change: "-7.80 (-0.24%)", positive: false },
    { name: "S&P 500", price: "6,968.2", change: "+22.20 (+0.32%)", positive: true },
    { name: "US 100", price: "25,671.1", change: "+126.10 (+0.49%)", positive: true },
];

const MarketTicker = () => {
    return (
        <div className="ticker-wrapper px-2 sm:px-4">
            <div className="ticker-track">
                {[...data, ...data].map((item, index) => (
                    <div className="ticker-item text-xs sm:text-sm md:text-base" key={index}>
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                        <span className={item.positive ? "positive" : "negative"}>
                            {item.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketTicker;
