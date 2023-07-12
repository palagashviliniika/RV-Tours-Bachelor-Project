import React from 'react';
import { GiSurferVan } from "react-icons/gi";
import { Link, Head } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown";

const Navbar = (props) => {
    // console.log(props.auth)
    return (
        <div className={"sticky top-0 z-10 w-screen text-xl flex items-center justify-between bg-snowWhite px-32 py-6"}>
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
                        <Link href={route('home')}>
                            Home
                        </Link>
                    </li>
                    <li className={"border-b-2 border-transparent hover:text-rust-hover hover:border-rust-hover transition ease-in-out"}>
                        <Link href={route('toursPage')}>
                            Tours
                        </Link>
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
                {
                    !props.auth.user ?
                    <>
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
                    </>
                    :
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                Hello, {props.auth.user.name}!

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('dashboard')}>Dashboard</Dropdown.Link>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;
