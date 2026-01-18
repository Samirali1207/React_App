import React from 'react'
import about1_1 from "../images/about1_1.png"
import about1_2 from "../images/about1_2.png"
import about1_3 from "../images/about1_3.png"

const AboutCards2 = () => {

  const cardDetails = [
    {
      heading: "OPPURTUNITIES",
      para: "Nebula Financial Services Ltd Gives You An Opportunity To Take Part In Global Trading And Walk On The Path Of Organisational Growth And Progress.",
      bg: "rgb(205, 166, 85)",
      img: about1_1,
    },
    {
      heading: "PLATFORM",
      para: "Now You Can Get Superior Control Over Your Trading With Advanced Features And Trading Platform That Fulfils The Requirement Of Growing Currency Traders.",
      bg: "black",
      img: about1_2,
    },
    {
      heading: "COMPETITIVE",
      para: "Nebula Financial Services Ltd Gives You An Opportunity To Take Part In Global Trading And Walk On The Path Of Organisational Growth And Progress.",
      bg: "black",
      img: about1_3,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {cardDetails.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg }}
            className="
              rounded-xl
              px-6 py-10
              flex flex-col items-center text-center
              transition-transform duration-300
              hover:scale-95
            "
          >
           
            <img
              src={item.img}
              alt={item.heading}
              className="w-20 h-20 object-contain mb-6"
            />

          
            <h2 className="text-[#d4ad6d] font-bold text-xl sm:text-2xl mb-4">
              {item.heading}
            </h2>

           
            <p className="text-white font-medium text-sm sm:text-base leading-relaxed">
              {item.para}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default AboutCards2
