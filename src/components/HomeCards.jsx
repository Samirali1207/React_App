import React from "react";

const HomeCards = () => {
    const cards = [
        { heading: "Tight Raw Spreads from", para: "0.0 pips" },
        { heading: "Fee-Free Funding Options", para: "$0" },
        { heading: "Max Leverage", para: "1:500" },
        { heading: "Support", para: "24/7" },
    ];

    return (
        <div className="w-full  bg-black  px-4 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#d4ad6d] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-white font-bold text-xl sm:text-2xl mb-3">{card.heading}</h2>
                        <p className="text-white text-sm sm:text-base">{card.para}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCards;
