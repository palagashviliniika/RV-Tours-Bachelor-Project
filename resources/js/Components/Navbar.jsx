import React from 'react';
import { GiSurferVan } from "react-icons/gi";
import { Link, Head } from '@inertiajs/react';

const Navbar = () => {
    return (
        <div className={"w-screen text-xl flex items-center justify-between bg-transparent px-32 py-6 sticky bg-snowWhite"}>
            <Link
                href={route('home')}
                className={"flex items-center gap-2 transition ease-in-out motion-safe:hover:scale-[1.05] hover:text-rust-hover"}
            >
                <GiSurferVan size={"2.5rem"}/>
                <h1 className={"font-black pt-2 text-2xl"}>NomadRoamGeorgia</h1>
            </Link>
            <div className={"pt-2 flex gap-6 items-center"}>
                <ul className={"flex gap-6 font-medium"}>
                    <li className={"border-b-2 border-transparent hover:text-rust-hover hover:border-rust-hover transition ease-in-out"}>
                        <a href={"#"}>
                            Home
                        </a>
                    </li>
                    <li className={"border-b-2 border-transparent hover:text-rust-hover hover:border-rust-hover transition ease-in-out"}>
                        <a href="">
                            Tours
                        </a>
                    </li>
                    <li className={"border-b-2 border-transparent hover:text-rust-hover hover:border-rust-hover transition ease-in-out"}>
                        <a href="">
                            About Us
                        </a>
                    </li>
                    <li className={"border-b-2 border-transparent hover:text-rust-hover hover:border-rust-hover transition ease-in-out"}>
                        <a href="">
                            Contact Us
                        </a>
                    </li>
                    <li className={"border-b-2 border-transparent hover:text-rust-hover hover:border-rust-hover transition ease-in-out"}>
                        <a href="">
                            Blog
                        </a>
                    </li>
                </ul>
                <Link href={route('login')}>
                    <button
                        className="font-medium text-black bg-transparent px-6 py-1.5 rounded-3xl border border-rust transition ease-in-out motion-safe:hover:scale-[1.05]"
                    >
                        Log in
                    </button>
                </Link>

                <Link href={route('register')}>
                    <button
                        className="font-medium text-snowWhite bg-rust hover:bg-rust-hover px-6 py-1.5 rounded-3xl border border-rust transition ease-in-out hover:border-rust-hover motion-safe:hover:scale-[1.05]"
                    >
                        Register
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;
