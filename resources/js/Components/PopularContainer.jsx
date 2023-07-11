import React from 'react';
import PopularSingle from "@/Components/PopularSingle";

const PopularContainer = ({tours}) => {

    return (
        <>
            <div className={"container mx-auto py-6"}>
                <h1 className={"text-texts text-5xl font-black"}>Popular Destinations</h1>
                <p className={"text-xl mt-2 mb-6"}>From historical cities to natural specteculars, come see the best of Georgia</p>
                <div className={"flex gap-8"}>
                    {tours && tours.slice(0, 4).map(tour => {
                        return (
                            <PopularSingle
                                tour={tour}
                            />
                            )
                    })}
                </div>
            </div>

            <div className={"w-full bg-[url(/public/images/picnic.jpeg)] bg-center h-32 flex items-center justify-center"}>
                <div>
                    <button
                        className="font-medium text-snowWhite bg-gradient-to-r from-rust to-rust-gradient hover:bg-rust-hover px-6 py-1.5 rounded-3xl transition ease-in-out motion-safe:hover:scale-[1.05]"
                    >
                        Explore More
                    </button>
                </div>
            </div>
        </>
    );
};

export default PopularContainer;
