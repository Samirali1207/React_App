import React, { useRef } from "react";

//  images for cards 
import img1 from '../images/c2g1.png'
import img2 from '../images/c2g2.png'
import img3 from '../images/c2g3.png'

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

import { FiMousePointer } from "react-icons/fi";
import { div } from "framer-motion/client";
const Example = () => {
    return (
        <div
            className="
        w-full bg-[#d9d8d4]
        px-4 py-10
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        place-items-center
      "
        >
            <TiltCard image={img1} heading="Register" para="Register the trading account with your information." />
            <TiltCard image={img2} heading="Fund" para="Fund the trading with the method of your choice." />
            <TiltCard image={img3} heading="Trade" para="Submit the required KYC and you are ready to trade." />
        </div>
    );
};


const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
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
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = ((mouseY / rect.height) - 0.5) * -20;
        const rY = ((mouseX / rect.width) - 0.5) * 20;

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

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}

            style={{
                transformStyle: "preserve-3d",
                transform,
                background: "rgb(205, 166, 85)",
            }}
            className="
        relative
        w-full max-w-sm
        h-auto
        rounded-xl
        px-6 py-8
        flex flex-col items-center justify-center
        text-center
      "
        >
            <img src={image} alt="" className="w-16 sm:w-20 mb-3" />

            <h1 className="font-bold text-xl sm:text-2xl text-white mb-2">
                {heading}
            </h1>

            <p className="text-sm sm:text-base text-white/90">
                {para}
            </p>
        </motion.div>
    );
};


export default Example;

