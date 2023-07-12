import React from 'react';
import PopularSingle from "@/Components/PopularSingle";
import {Link} from "@inertiajs/react";

const PopularContainer = ({tours}) => {

    return (
        <>
            <div className={" text-center md:text-left container mx-auto py-6"}>
                <h1 className={"px-4 md:px-0 text-texts md:text-5xl text-3xl font-black"}>Popular Destinations</h1>
                <p className={"px-4 md:px-0 md:text-xl text-md mt-2 mb-6"}>From historical cities to natural specteculars, come see the best of Georgia</p>
                <div className={"px-4 md:px-0 grid md:grid-cols-4 grid-cols-1 gap-8"}>
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
                    <Link href={route('home')}>
                        <button
                            className="font-medium text-snowWhite bg-gradient-to-r from-rust to-rust-gradient hover:bg-rust-hover px-6 py-1.5 rounded-3xl transition ease-in-out motion-safe:hover:scale-[1.05]"
                        >
                            Explore More
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PopularContainer;
