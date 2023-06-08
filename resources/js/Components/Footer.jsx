import React from 'react';

const Footer = () => {
    return (
        <div className={"text-lg text-texts-gray flex items-center justify-around bg-snowWhite px-32 py-6 w-screen border-t-8 border-rust"}>
            <div className={"flex flex-col"}>
                <h3 className={"text-texts font-bold text-xl"}>Links</h3>
                <ul className={"flex flex-col font-medium"}>
                    <li className={"hover:text-rust-hover transition ease-in-out"}>
                        <a href={"#"}>
                            Home
                        </a>
                    </li>
                    <li className={"hover:text-rust-hover transition ease-in-out"}>
                        <a href="">
                            Tours
                        </a>
                    </li>
                    <li className={"hover:text-rust-hover transition ease-in-out"}>
                        <a href="">
                            About Us
                        </a>
                    </li>
                    <li className={"hover:text-rust-hover transition ease-in-out"}>
                        <a href="">
                            Contact Us
                        </a>
                    </li>
                    <li className={"hover:text-rust-hover transition ease-in-out"}>
                        <a href="">
                            Blog
                        </a>
                    </li>
                </ul>
            </div>

            <div className={"flex flex-col"}>
                <h3 className={"text-texts font-bold text-xl"}>Contact Us</h3>
                <ul className={"flex flex-col font-medium"}>
                    <li className={"hover:text-rust-hover transition ease-in-out"}>
                        <a href={`mailto:n_palagashvili@cu.edu.ge`}>
                            n_palagashvili@cu.edu.ge
                        </a>
                    </li>
                    <li className={"hover:text-rust-hover transition ease-in-out"}>
                        <a href="">
                            +995 555 91-59-15
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
