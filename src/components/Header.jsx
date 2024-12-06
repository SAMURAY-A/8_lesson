import React from "react";

export default function Header() {
    return (
        <nav className="flex justify-around py-7 bg-[#1C1E53] ">
            <a href="#" className="text-white text-2xl font-bold">
                {"{"}Finsweet
            </a>
            <div className="flex items-center gap-10">
                <ul className="flex gap-7 text-white max-md:hidden">
                    <li>
                        <a href="#"> Home</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
                <button className="border rounded-full px-10 border-gray-200 py-3 text-white max-[750px]:w-[150px] max-[750px]:h-[50px] max-[750px]:text-[20px] max-[750px]:py-2 max-[750px]:px-5">
                    Contact us
                </button>
            </div>
        </nav>
    );
}
