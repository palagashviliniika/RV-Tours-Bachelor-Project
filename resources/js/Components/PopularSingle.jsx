import React from 'react';
import { FaMapMarkerAlt, FaBusAlt } from "react-icons/fa";
import { BsFileRichtextFill } from "react-icons/bs";


const PopularSingle = () => {
    return (
        <div className={"bg-snowWhite hover:bg-white w-1/4 flex flex-col rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl motion-safe:hover:scale-[1.01]"}>
            <div className={"h-44 overflow-hidden rounded-t-md"}>
                <img
                    src="https://www.georgianholidays.com/storage/4Tgyuk0skmm138ee0I5uo5B1ShNL1oiJDd9UP5Zw.jpg"
                    alt="Racha"
                    className={"h-full w-full object-cover rounded-t-md transition duration-500 ease-in-out hover:scale-110"}
                />
            </div>
            <div className={"mx-4"}>
                <div className={"mt-5 text-2xl flex items-center gap-2"}>
                    <h1 className={"font-black text-texts"}>
                        Racha on Wheels
                    </h1>
                    <FaMapMarkerAlt color={"#B7410E"} size={"1.6rem"}/>
                </div>

                <hr className={"h-0.5 mt-5 mb-3"}/>

                <div className={"mx-4 flex justify-between"}>
                    <div className={"flex items-center gap-2"}>
                        <p className={"text-texts-gray text-md"}>Package</p>
                        <FaBusAlt color={"1C3041"}/>
                    </div>
                    <h1 className={"text-2xl text-texts font-semibold"}>700₾</h1>
                </div>

                <hr className={"h-0.5 mb-5 mt-3"}/>

                <p className={"text-md"}>
                    Experience a remarkable RV tour in Racha, Georgia. Discover stunning landscapes, indulge in local cuisine, and embrace the rich culture. Expert guides, comfortable accommodations, and hidden gems await you. Create unforgettable memories on this extraordinary adventure.
                </p>

                <button className={"my-5 flex items-center gap-2 className=font-medium text-snowWhite bg-gradient-to-r from-rust to-rust-gradient hover:bg-rust-hover px-6 py-1.5 rounded-3xl transition ease-in-out hover:border-rust-hover motion-safe:hover:scale-[1.05]"}>
                    DETAILS
                    <BsFileRichtextFill/>
                </button>
            </div>

        </div>
    );
};

export default PopularSingle;

