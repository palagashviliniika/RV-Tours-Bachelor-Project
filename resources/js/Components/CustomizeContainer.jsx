import React from 'react';
import CustomizeForm from "@/Components/CustomizeForm";

const CustomizeContainer = ({auth, errors, transports}) => {
    // console.log(transports)
    return (
        <div className={"md:px-0 px-4 text-center md:text-left container mx-auto py-6"}>
            <h1 className={"text-texts text-5xl font-black"}>Plan Your Trip</h1>
            <p className={"text-xl mt-2 mb-6"}>From historical cities to natural specteculars, come see the best of Georgia</p>
            <div className={"md:px-0 px-4 flex md:flex-row flex-col gap-8 "}>
                <div className={"py-[20%] relative h-0 overflow-hidden md:w-1/2 w-full"}>
                    <iframe
                        className={"absolute top-0 left-0 w-full md:h-3/4 h-full rounded-3xl"}
                        src="https://player.adventr.io/index.html?link=https%3A%2F%2Fd252srr1zuysk4.cloudfront.net%2Fclients%2F11553%2F15126%2Fpublished%2F11553-rv-14632792.data"
                        frameBorder="0" scrolling="no" allowFullScreen
                        allow="autoplay; fullscreen; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; web-share">
                    </iframe>
                </div>

                <div className={"md:w-1/2 w-full"}>
                    <div className="">
                        {/*<div className="w-60 mx-auto sm:px-6 lg:px-8">*/}
                            <div className="bg-gray-600 overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900 p-32">
                                    <CustomizeForm
                                        transports={transports}
                                    />
                                </div>
                            </div>
                        {/*</div>*/}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CustomizeContainer;
