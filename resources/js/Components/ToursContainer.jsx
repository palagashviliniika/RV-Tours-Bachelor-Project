import React from 'react';
import PopularSingle from "@/Components/PopularSingle";

const ToursContainer = ({tours}) => {
    return (
        <div>
            <div className={"w-full bg-[url(/public/images/picnic.jpeg)] bg-center h-80 flex items-center justify-center"}>
            </div>

            <div className={"container mx-auto py-6 text-center"}>
                <h1 className={"text-rust text-5xl font-black"}>Browse Tours</h1>
                <p className={"text-xl mt-2 mb-6"}>From historical cities to natural specteculars, come see the best of Georgia</p>
                <div className={"grid grid-cols-4 gap-8"}>
                    {tours && tours.map(tour => {
                        return (
                            <PopularSingle
                                tour={tour}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ToursContainer;
