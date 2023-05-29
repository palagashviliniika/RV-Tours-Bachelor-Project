import React from 'react';
import { GiSurferVan } from "react-icons/gi";
import { Link, Head } from '@inertiajs/react';

const Navbar = () => {
    return (
        <div className={"text-xl flex items-center justify-between px-32 py-6 sticky bg-snowWhite"}>
            <Link
                href={route('home')}
                className={"flex items-center gap-2"}
            >
                <GiSurferVan size={"2.5rem"}/>
                <h1 className={"font-black pt-2 text-2xl"}>NomadRoamGeorgia</h1>
            </Link>
            <div className={"pt-2 flex gap-6 items-center"}>
                <ul className={"flex gap-6"}>
                    <li>
                        Home
                    </li>
                    <li>
                        Tours
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
                <Link href={route('login')}>
                    <button
                        className="font-semibold text-black bg-transparent px-6 py-1.5 rounded-3xl border border-rust"
                    >
                        Log in
                    </button>
                </Link>

                <Link href={route('register')}>
                    <button
                        className="font-semibold text-snowWhite bg-rust px-6 py-1.5 rounded-3xl border border-rust"
                    >
                        Register
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;
