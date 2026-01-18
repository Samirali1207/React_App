import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../images/banner1.png";
import image2 from "../images/banner2.png";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Corousal() {
    return (
        <div className="w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className="bg-black w-full
                          flex flex-col md:flex-row
                          items-center justify-between
                          px-4 md:px-20 py-10
                          gap-10">


                        <div className="w-full md:w-1/2
                            flex flex-col gap-4
                            text-center md:text-left">
                            <h1 className="text-white font-medium
                             text-xl sm:text-2xl md:text-4xl">
                                Start Forex trading in minutes
                            </h1>

                            <h1
                                style={{ color: "rgb(205, 166, 85)" }}
                                className="font-medium
                           text-xl sm:text-2xl md:text-4xl"
                            >
                                with Nebula Finserv Service Limited
                            </h1>

                            <p className="text-gray-300
                            text-sm sm:text-base md:text-lg">
                                Unlease Your dynamic Potential in the forex Market with a premier Forex Broker
                            </p>

                            <div className="flex justify-center md:justify-start">
                                <button
                                    className="px-6 py-3 mt-4 rounded-md border-2 border-transparent
                                            bg-[#cda655] hover:bg-black hover:border-white hover:text-white  text-black
                                                  transition duration-300"
                                >
                                    Get Started
                                </button>
                            </div>

                        </div>


                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={image1}
                                alt=""
                                className="w-full max-w-sm md:max-w-md object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="bg-black w-full
                          flex flex-col md:flex-row
                          items-center justify-between
                          px-4 md:px-20 py-10
                          gap-10">

                        <div className="w-full md:w-1/2
                            flex flex-col gap-4
                            text-center md:text-left">
                            <h1 className="text-white font-medium
                             text-xl sm:text-2xl md:text-4xl">
                                Start Forex trading in minutes
                            </h1>

                            <h1 className="text-white font-medium
                             text-xl sm:text-2xl md:text-4xl">
                                Start the progress now
                            </h1>

                            <p className="text-gray-300
                            text-sm sm:text-base md:text-lg">
                                Unlease Your dynamic Potential in the forex Market with a premier Forex Broker
                            </p>

                            <div className="flex justify-center md:justify-start">
                                <button
                                    className="px-6 py-3 mt-4 rounded-md border-2 border-transparent
                                            bg-[#cda655] hover:bg-black hover:border-white hover:text-white  text-black
                                                  transition duration-300"
                                >
                                    Get Started
                                </button>
                            </div>


                        </div>

                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={image2}
                                alt=""
                                className="w-full max-w-sm md:max-w-md object-contain"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
