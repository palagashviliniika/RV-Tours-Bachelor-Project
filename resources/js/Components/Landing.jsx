import React from 'react';

const Landing = ({img, txt, btn}) => {
    return (
        <div className={`flex justify-center items-center bg-black mx-auto px-4 text-center w-screen h-[calc(100vh_-_98px)] bg-center bg-[url(${img})]`}>
            <div className={"flex flex-col gap-10 items-center"}>
                <h1 className={"text-5xl font-black text-snowWhite"}>
                    Explore Georgia on Wheels
                </h1>
                <p className={"text-lg text-snowWhite w-3/4"}>
                    {txt}
                </p>

                <button
                    className="font-medium text-snowWhite bg-rust hover:bg-rust-hover px-6 py-1.5 rounded-3xl border border-rust transition ease-in-out hover:border-rust-hover motion-safe:hover:scale-[1.05]"
                >
                    {btn}
                </button>

            </div>

        </div>
    );
};

export default Landing;
