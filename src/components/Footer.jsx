import React from "react";
import home from "/public/icon/home.png";
import about_us from "/public/icon/about_us.png";
import features from "/public/icon/features.png";
import pricing from "/public/icon/pricing.png";
import faq from "/public/icon/faq.png";
import blog from "/public/icon/blog.png";

export default function Footer() {
    return (
        <footer className="hidden max-md:flex justify-around py-7 bg-[#1C1E53]">
            <div className="flex flex-col gap-10 ">
                <div className="flex gap-20">
                    <a href="#">
                        <img src={home} alt="" width="35" height="35" />
                    </a>
                    <a href="#">
                        <img src={about_us} alt="" width="35" height="35" />
                    </a>

                    <a href="#">
                        <img src={features} alt="" width="35" height="35" />
                    </a>
                </div>
                <div className="flex gap-20">
                    <a href="#">
                        <img src={pricing} alt="" width="35" height="35" />
                    </a>

                    <a href="#">
                        <img src={faq} alt="" width="35" height="35" />
                    </a>

                    <a href="#">
                        <img src={blog} alt="" width="35" height="35" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
