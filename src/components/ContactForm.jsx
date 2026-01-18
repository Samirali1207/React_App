import React from 'react';
import { GrLocation } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
    return (
        <section className="w-full bg-white flex flex-col md:flex-row items-start md:items-stretch justify-center gap-6 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">

          
            <div className="w-full md:w-1/2 bg-white border-2 border-gray-400 rounded-md p-4 flex flex-col gap-6">
               
                <div className="flex flex-col items-center text-center gap-2">
                    <GrLocation className="text-5xl text-black" />
                    <h1 className="text-xl font-bold text-[#cda655]">Registered Address</h1>
                    <p className="text-sm font-light">
                        Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia. Registration Number: 2025-00811
                    </p>
                </div>

               
                <div className="flex flex-col items-center text-center gap-2">
                    <GrLocation className="text-5xl text-black" />
                    <h1 className="text-xl font-bold text-[#cda655]">Physical Address</h1>
                    <p className="text-sm font-light">
                        2 David Gamrekeli St., Office No. 2, 0160 Tbilisi, Georgia.
                    </p>
                </div>

               
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                    <div className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md w-full sm:w-auto text-center">
                        <FaPhoneAlt /> +91 8115829048
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md w-full sm:w-auto text-center">
                        <MdEmail /> support@nebuafinserv.com
                    </div>
                </div>
            </div>

           
            <div className="w-full md:w-1/2 bg-white border-2 border-gray-400 rounded-md p-4 flex flex-col gap-4">
               
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="flex-1 min-w-[150px] border-2 border-gray-500 px-4 py-2 rounded-md text-black"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="flex-1 min-w-[150px] border-2 border-gray-500 px-4 py-2 rounded-md text-black"
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Your Number"
                        className="flex-1 min-w-[150px] border-2 border-gray-500 px-4 py-2 rounded-md text-black"
                    />
                    <input
                        type="text"
                        placeholder="Your Subject"
                        className="flex-1 min-w-[150px] border-2 border-gray-500 px-4 py-2 rounded-md text-black"
                    />
                </div>

                <textarea
                    placeholder="Your Message"
                    className="w-full h-32 border-2 border-gray-500 px-4 py-2 rounded-md text-black"
                />

                
                <div className="flex justify-center mt-2">
                    <button
                        className="px-6 py-3 rounded-xl font-semibold hover:cursor-pointer text-white bg-[#cda655] text-lg w-full sm:w-auto"
                    >
                        Send Message
                    </button>
                </div>
            </div>

        </section>

    );
};

export default ContactForm;
