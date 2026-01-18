import { FaCoins, FaChartLine, FaCube, FaBitcoin } from "react-icons/fa";

const cards = [
  {
    title: "FOREX",
    desc: "Trade 41+ forex pairs with deep liquidity and tight spreads.",
    icon: <FaCoins size={28} />,
  },
  {
    title: "CFD",
    desc: "Nebula Financial Services Ltd offers numerous CFD instruments to enhance your trading experience.",
    icon: <FaChartLine size={28} />,
  },
  {
    title: "COMMODITIES",
    desc: "Trade Gold, Silver, Copper, Natural Gas, and Crude Oil with ease.",
    icon: <FaCube size={28} />,
  },
  {
    title: "CRYPTO",
    desc: "Trade the most popular cryptocurrency CFDs including Bitcoin on our platform.",
    icon: <FaBitcoin size={28} />,
  },
];

export default function MarketCards() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-r from-[#0c4a5a] to-[#0a2f38]
        px-4 sm:px-6 md:px-10
        py-12 md:py-20
      "
    >
      
      <div className="text-center text-white mb-12 md:mb-16">
        <span
          className="
            inline-block
            bg-[#d4ad6d]
            text-white text-xs sm:text-sm
            font-semibold
            px-5 py-1
            rounded-full
            mb-4
          "
        >
          MARKET
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Range of{" "}
          <span
            style={{ textDecoration: "underline overline", textDecorationThickness: "1px" }}
            className="text-[#d4ad6d]"
          >
            MARKET
          </span>
        </h2>

        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg font-semibold max-w-3xl mx-auto">
          Over 70+ trading instruments across forex, commodities, indices, and CFDs.
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6 md:gap-8
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-xl
              p-6 md:p-8
              text-center
              shadow-lg
              transition duration-300
              hover:-translate-y-2
              hover:bg-black
              hover:text-white
            "
          >
           
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#d4ad6d] flex items-center justify-center text-black">
              {card.icon}
            </div>

            
            <h3 className="text-[#d4ad6d] font-semibold text-base md:text-lg mb-3">
              {card.title}
            </h3>

          
            <p className="text-gray-700 text-sm mb-6">
              {card.desc}
            </p>

            
            <button
              className="
                bg-[#b89255]
                hover:bg-[#a57f45]
                text-white
                text-sm
                px-6 py-2
                rounded-md
                transition
              "
            >
              Instruments list
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
