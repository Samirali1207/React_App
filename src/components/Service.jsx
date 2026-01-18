import { FaCoins, FaChartLine, FaCube, FaBitcoin } from "react-icons/fa";

const services = [
    {
        title: "FOREX",
        desc: "Trade 41+ forex pairs with deep liquidity and tight spreads.",
        icon: <FaCoins size={32} />,
    },
    {
        title: "CFD",
        desc: "Nebula Financial Services Ltd has numerous CFD instruments to enhance your trading experience.",
        icon: <FaChartLine size={32} />,
    },
    {
        title: "COMMODITIES",
        desc: "Trade Gold, Silver, Copper, Natural Gas, and Crude oil with ease.",
        icon: <FaCube size={32} />,
    },
    {
        title: "CRYPTO",
        desc: "Trade the most popular CFD's Cryptocurrency, bitcoin on our platform.",
        icon: <FaBitcoin size={32} />,
    },
];

export default function Services() {
  return (
    <section className="bg-gradient-to-r from-[#0c4a5a] to-[#0a2f38] py-16 px-4 sm:px-8 lg:px-16">

      <div className="text-center text-white mb-12 max-w-7xl mx-auto">
        <span className="inline-block mt-6 bg-[#d4ad6d] text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-full mb-2">
          SERVICES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Range of{" "}
          <span
            className="text-[#d4ad6d] underline overline decoration-1"
          >
            SERVICES
          </span>
        </h2>
        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
          Over 70+ trading instruments across forex, commodities, indices, CFDs, and cryptocurrencies.
        </p>
      </div>

     
      <div className="max-w-7xl lg-max-w-9xl   mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 hover:bg-black hover:text-white transition duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full bg-[#d4ad6d] flex items-center justify-center text-black">
              {service.icon}
            </div>
            <h3 className="text-[#d4ad6d] font-semibold text-lg sm:text-xl mb-3">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              {service.desc}
            </p>
            <button className="bg-[#b89255] hover:bg-[#a57f45] text-white text-sm sm:text-base px-4 py-2 rounded-md transition w-full sm:w-auto">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}