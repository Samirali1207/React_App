import React from "react";
import image from "../images/cardImage.jpg";

const AnimatedCard = () => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <section className="w-full bg-white px-4 py-10">
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
        "
      >
      
        <div className="flex justify-center">
          <div
            className="
              w-full max-w-sm sm:max-w-md
              rounded-xl shadow-xl
              overflow-hidden
              bg-white
              transition-transform duration-200
              cursor-pointer
            "
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

       
        <div className="border-2 bg-white rounded-xl">
          <div className="px-6 sm:px-8 md:px-12 py-8">
            <h2
              className="
                text-xl sm:text-2xl md:text-3xl
                font-semibold text-gray-800
                leading-snug
              "
            >
              Increase Your Revenue Potential <br />
              Become An Introducing Broker With{" "}
              <span className="text-[#d4ad6d]">
                Nebula Financial Services Ltd
              </span>
            </h2>

            <div className="w-full h-px bg-[#d4ad6d] my-5" />

            <p
              className="
                text-gray-600 font-semibold italic
                text-sm sm:text-base md:text-lg
              "
            >
              Customised Rebate Scheme / Marketing Tools / Dedicated IB Dashboard
            </p>

            <div className="w-full h-px bg-[#d4ad6d] my-5" />

            <p
              className="
                text-[#d4ad6d]
                text-base sm:text-lg md:text-xl
                font-semibold mb-6
              "
            >
              Earn Maximum IB Commission With Nebula Financial Services Ltd*
            </p>

            <button
              className="
                flex items-center gap-2
                bg-[#b89255] hover:bg-[#a57f45]
                text-white
                px-6 py-3
                rounded-md
                w-fit
                transition duration-300
                hover:scale-105
              "
            >
              Become An IB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCard;
