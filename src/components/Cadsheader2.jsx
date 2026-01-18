import React from 'react'

const Cadsheader = () => {

    const h1 = "Start Forex Trading in Minutes";
    const p =
        "Nebula Financial Services Ltd offers state-of-the-art technology with tight spreads and superior trading conditions.";

    return (
        <div
            className="
        w-full bg-[#d9d8d4]
        flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-10
        py-6 sm:py-8 md:py-10
        text-center
      "
        >
          
            <button
                style={{ background: "rgb(205, 166 , 85)" }}
                className="
          text-xs sm:text-sm
          px-4 py-1.5
          mb-2 sm:mb-3
          font-medium rounded-xl
        "
            >
                WHY US
            </button>

         
            <h1
                style={{ fontFamily: "Roboto, sans-serif" }}
                className="
          text-blue-950 font-bold
          text-xl sm:text-2xl md:text-3xl
        "
            >
                {h1}
            </h1>

            
            <p
                className="
          text-gray-600 font-medium
          text-sm sm:text-base md:text-lg
          max-w-3xl
          mt-2 sm:mt-3
        "
            >
                {p}
            </p>
        </div>
    )
}

export default Cadsheader
