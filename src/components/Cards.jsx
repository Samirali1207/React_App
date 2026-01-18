import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

import graph1 from "../images/graph1.png";
import g2 from "../images/g2.png";
import g3 from "../images/g3.png";
import g4 from "../images/g4.png";
import g5 from "../images/g5.png";

const Example = () => {
    const headings = ["0.1 Pips", "500", "70+", "True", "Easy"];
    const paras = ["Low Spreads From 500", "Leverage Up to 1", "Instruments", "ECN/STP", "Funding"];
    const images = [graph1, g2, g3, g4, g5];

    return (
        <div className="w-full bg-[#f2f1ec] px-4 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
            {images.map((img, idx) => (
                <TiltCard key={idx} image={img} heading={headings[idx]} para={paras[idx]} />
            ))}
        </div>
    );
};

const ROTATION_RANGE = 20;

const TiltCard = ({ image, heading, para }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 20 });
    const transform = useMotionTemplate`
    perspective(1000px)
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const rX = ((e.clientY - rect.top) / rect.height - 0.5) * -ROTATION_RANGE;
        const rY = ((e.clientX - rect.left) / rect.width - 0.5) * ROTATION_RANGE;
        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d", transform, background: "rgb(205, 166, 85)" }}
            className="
        relative
        w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48
        rounded-xl
        flex flex-col items-center justify-center
        p-2
        text-center
      "
        >
            <img src={image} alt="" className="w-16 sm:w-20 md:w-24 mb-2 object-contain" />
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1">{heading}</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">{para}</p>
        </motion.div>
    );
};

export default Example;
