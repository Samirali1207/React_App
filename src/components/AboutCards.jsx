import React, { useRef } from "react";
import image1 from "../images/about1.png";
import image2 from "../images/about2.png";
import image3 from "../images/about3.png";

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

const Example = () => {
    return (
        <section className="w-full bg-[#f2f1ec] py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
                <TiltCard image={image1} heading="Who We Are" para="Nebula Financial Services Ltd has globally acquired brand recognition by providing a world-class trading environment to investors without any divergence of interest. We are one of the world’s most trusted online forex trading brokers." />

                <TiltCard image={image2} heading="Our Mission" para="We help investors with long-term business conditions, client support, and education to create strong customer relationships worldwide." />

                <TiltCard image={image3} heading="Our Vision" para="We aim to build strong relationships with our clients by offering unique and flexible trading solutions tailored to their needs." />
            </div>
        </section>
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
        if (window.innerWidth < 1024) return; // disable tilt on mobile

        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(((mouseY / rect.height) - 0.5) * -ROTATION_RANGE);
        y.set(((mouseX / rect.width) - 0.5) * ROTATION_RANGE);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
                transformStyle: "preserve-3d",
                transform,
                border: "2px solid rgb(205,166,85)",
            }}
            className="
        bg-white
        rounded-xl
        p-6
        w-full
        sm:w-[90%]
        md:w-[420px]
        min-h-[420px]
        flex
        flex-col
        items-center
        text-center
        shadow-md
        hover:shadow-2xl
        transition
      "
        >
            <img
                src={image}
                alt=""
                className="w-24 md:w-28 mb-4"
            />

            <h1 className="text-[#cda655] font-bold text-xl md:text-2xl mb-3">
                {heading}
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {para}
            </p>
        </motion.div>
    );
};

export default Example;
