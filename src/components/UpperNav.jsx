import React from 'react'
import { BsPeople } from "react-icons/bs";

const UpperNav = () => {
    return (
        <div
            style={{ backgroundColor: "rgb(205, 166, 85)" }}
            className="text-xs md:text-sm w-full px-3 md:px-6
                 flex flex-col md:flex-row
                 items-center md:justify-between
                 gap-2 md:gap-10
                 min-h-[auto] md:h-8"
        >
            
            <div className="text-center md:text-left">
                <a href="mailto:support@nebulafinserv.com">
                    support@nebulafinserv.com
                </a>
            </div>

           
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-center">
                <a href="#">
                    <BsPeople className="text-base md:text-xl mr-1 inline" />
                    Open Real Account
                </a>

                <a href="#">
                    <BsPeople className="text-base md:text-xl mr-1 inline" />
                    Open Demo Account
                </a>

                <a href="#">
                    <BsPeople className="text-base md:text-xl mr-1 inline" />
                    Login
                </a>
            </div>
        </div>
    )
}

export default UpperNav
