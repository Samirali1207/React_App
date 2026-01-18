import React from "react";
import image from "../images/about4.jpg";
import bgImage from "../images/bgimage2.jpg";

const AboutTiltCard = () => {
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
    const threshold = 12;

    const handleMove = (e) => {
        if (window.innerWidth < 1024) return; // disable tilt on mobile

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <section
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full py-16 px-4"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

               
                <div className="w-full lg:w-1/2 bg-transparent rounded-2xl">
                    <div className="flex flex-col justify-center px-2 sm:px-6">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug">
                            About
                            <span className="text-[#d4ad6d] ml-2 sm:ml-4 font-bold">
                                Nebula Financial Services Ltd
                            </span>
                        </h2>

                        <div className="w-full h-[1px] bg-[#d4ad6d] my-6" />

                        <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg italic leading-relaxed">
                            Nebula Financial Services Ltd has globally acquired brand recognition
                            by providing a world-class trading environment to investors without
                            any divergence of interest.
                        </p>

                        <div className="w-full h-[1px] bg-[#d4ad6d] my-6" />

                        <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                            Nebula Financial Services Ltd represents the future of Forex trading,
                            offering unique business solutions and enhanced trading experiences
                            for superior control.
                        </p>

                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div
                        className="rounded-xl shadow-2xl overflow-hidden bg-white transition-transform duration-200"
                        onMouseMove={handleMove}
                        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                        style={{
                            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                            maxWidth: "420px",
                        }}
                    >
                        <img
                            src={image}
                            alt="About Nebula"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutTiltCard;
