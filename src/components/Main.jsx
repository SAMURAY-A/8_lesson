import React from "react";
import photo from "/public/photo.png";
import head_logo from "/public/head_logo.png";
import daftar from "/public/daftar.png";
import qalam from "/public/qalam.png";
import savol from "/public/savol.png";
import soat from "/public/soat.png";
import submite from "/public/submite.png";
import user from "/public/user.png";

export default function Main() {
    const works = [
        {
            id: 1,
            title: "Strategy",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
            imgSrc: photo,
        },
        {
            id: 2,
            title: "Wireframing",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
            imgSrc: photo,
        },
        {
            id: 3,
            title: "Design",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
            imgSrc: photo,
        },
        {
            id: 4,
            title: "Development",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.",
            imgSrc: photo,
        },
    ];

    const malumotlar = [
        {
            icon: user,
            title: "Uses Client First",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
        },
        {
            icon: submite,
            title: "Two Free Revision Round",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
        },
        {
            icon: qalam,
            title: "Template Customization",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
        },
        {
            icon: savol,
            title: "24/7 Support",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
        },
        {
            icon: soat,
            title: "Quick Delivery",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
        },
        {
            icon: daftar,
            title: "Hands-on approach",
            description:
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
        },
    ];

    return (
        <>
            <div className="bg-[#1C1E53] text-white py-10 flex justify-evenly max-[1250px]:flex-col max-[1250px]:items-center max-[1250px]:gap-10">
                <div className="flex flex-col ">
                    <h2 className="text-5xl w-[500px] font-bold mb-[24px] max-[900px]:text-[30px] max-[900px]:w-[300px] max-[750px]:w-[250px] max-[750px]:text-[20px]">
                        Building stellar websites for early startups
                    </h2>
                    <p className="text-[16px] w-[450px] mb-[48px] max-[900px]:text-[15px] max-[900px]:w-[300px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                    </p>
                    <div className="flex gap-5 max-[750px]:flex-col max-[500px]:items-center">
                        <button className="border text-black rounded-full px-10 py-3 bg-[#FCD980] max-[500px]:w-[200px] max-[500px]:h-[50px] max-[500px]:text-[15px]">
                            View our work
                        </button>
                        <a
                            href="#"
                            className="flex items-center gap-3 max-[750px]:text-[25px]"
                        >
                            View Pricing{" "}
                            <span className="pb-3 text-center text-4xl">
                                {" "}
                                →
                            </span>
                        </a>
                    </div>
                </div>
                <img
                    className="max-[900px]:w-[500px] max-[750px]:w-[300px]"
                    src={head_logo}
                    alt="head_img"
                />
            </div>
            <div className="flex justify-evenly  my-[128px] max-[1250px]:flex-col max-[1250px]:items-center max-[1250px]:gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl">How we work</h2>
                    <p className="text-[16px] w-[300px] opacity-[0.7]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </p>
                    <a href="#" className="font-bold text-[#2405F2]">
                        Get in touch with us{" "}
                        <span className="text-4xl"> →</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-5 max-[1250px]:ml-[200px] max-[900px]:w-[500px] max-[900px]:gap-20 max-[900px]:mx-auto max-[750px]:grid-cols-1 max-[750px]:gap-10 max-[750px]:w-[300px]">
                    {works.map((work) => (
                        <div key={work.id}>
                            <div className=" text-center w-[328px] mt-12 max-[900px]:mt-0">
                                <h3 className="absolute pl-3 pt-2 text-white items-center font-bold text-2xl z-10">
                                    {`0${work.id}`}
                                </h3>
                                <img
                                    className="mb-7"
                                    src={work.imgSrc}
                                    alt="."
                                />
                            </div>
                            <h2 className="text-3xl">{work.title}</h2>
                            <p className="text-[16px] w-[250px] opacity-[0.7]">
                                {work.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col  items-center px-4 my-[128px]">
                <div className="text-center mb-16">
                    <h3 className="text-lg text-gray-500 ">Features</h3>
                    <h2 className="text-5xl font-medium mt-4 w-[560px] max-[560px]:text-[30px] max-[560px]:w-[300px]">
                        Design that solves problems, one product at a time
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 ">
                    {malumotlar.map((malumot, id) => (
                        <div
                            key={id}
                            className="flex flex-col items-start p-6 shadow-md w-[405px] h-[316px] max-[560px]:w-[305px]  "
                        >
                            <div className="text-blue-500 text-3xl mb-4">
                                <img
                                    src={malumot.icon}
                                    alt="."
                                    width="32px"
                                    height="32px"
                                />
                            </div>
                            <h3 className="text-[24px] font-medium mb-4">
                                {malumot.title}
                            </h3>
                            <p className="text-[16px] w-[300px] opacity-[0.7] max-[560px]:w-[200px]">
                                {malumot.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
