import React from 'react'

const Cadsheader = () => {

    const h1 = "Forex Trading With";
    const p =
        "Nebula Financial Services Ltd Offers State of art Technology with tight spread and superior trading condiitions";

    return (
        <div className="w-full bg-[#f2f1ec]
                    flex flex-col items-center justify-center
                    px-4 py-6 md:py-10
                    text-center">

       
            <button
                style={{ background: "rgb(205, 166 , 85)" }}
                className="text-xs md:text-sm
                   px-4 py-1 mb-3
                   font-medium rounded-xl"
            >
                WHY US
            </button>

          
            <h1 className="text-blue-950 font-bold
                     text-xl sm:text-2xl md:text-3xl
                     leading-tight">
                {h1}{' '}
                <span
                    style={{
                        textDecoration: "underline overline",
                        color: "rgb(205, 166 , 85)",
                        fontFamily: "Roboto, sans-serif",
                    }}
                >
                    Nebula Financial Services Ltd.
                </span>
            </h1>

            
            <p className="text-gray-600
                    font-medium
                    text-sm sm:text-base md:text-lg
                    max-w-4xl mt-3">
                {p}
            </p>
        </div>
    )
}

export default Cadsheader
