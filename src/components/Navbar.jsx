import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="bg-black border-b-2  border-red-100 w-full">
           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    <div className="flex-shrink-0">
                        <img className="h-16 w-auto" src={logo} alt="logo" />
                    </div>

                  
                    <div className="hidden md:flex space-x-6 font-bold text-white text-lg">
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white font-bold py-2 px-4 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition"
                        >
                            {isOpen ? "Close" : "≡"}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
                <div className="px-4 pb-4 space-y-2 font-bold text-white text-lg">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block hover:text-yellow-500 ${isActive ? "text-yellow-500" : "text-white"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
