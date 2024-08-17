import Link from "next/link";
import React from "react";
import { FaLocationDot, FaRegCopyright } from "react-icons/fa6";
import { FiPaperclip } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { LuClock10 } from "react-icons/lu";
import { MdPhone } from "react-icons/md";
import { SlPaperClip } from "react-icons/sl";

const FooterSection = () => {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "#partners",
      name: "Buy Sell",
    },
    {
      link: "#news",
      name: "news",
    },
    {
      link: "#listing",
      name: "listing",
    },
    {
      link: "#roadmap",
      name: "Board Advisor",
    },
    {
      link: "#contactus",
      name: "Contact",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-header-gradient justify-center p-10 text-white">
      <div className="lg:px-32 w-full md:px-10">
        <div className="flex lg:flex-row flex-col gap-8 w-full">
          <div className="lg:w-9/12 w-full flex flex-col">
            <h2 className="lg:text-6xl text-xl font-bold text-[#FFBD59] mb-4">
              How can we help you ?
            </h2>

            <div className="flex lg:w-9/12 w-full relative">
              <IoSearchOutline
                fontSize={40}
                fill="#FFBD59"
                className="absolute top-1/2 -translate-y-1/2 left-2 z-10 text-[#FFBD59]"
              />
              <input
                type="text"
                className="w-full bg-white py-5 px-3 pl-16 rounded-2xl text-black outline-[#FFBD59] border border-[#FFBD59]"
              />
              <IoClose
                fontSize={40}
                fill="#FFBD59"
                className="absolute top-1/2 -translate-y-1/2 right-2 z-10 text-[#FFBD59]"
              />
            </div>

            <div className="flex flex-col lg:w-96 w-full">
              <div className="p-2 bg-[#FFBD59] rounded-2xl flex flex-col w-full gap-3 mt-8">
                <h3 className="text-white font-bold text-2xl">
                  Submit a request
                </h3>

                <input
                  type="text"
                  name=""
                  placeholder="Name"
                  className="p-2 bg-white"
                />

                <input
                  type="text"
                  name=""
                  placeholder="Phone"
                  className="p-2 bg-white"
                />

                <input
                  type="email"
                  name=""
                  placeholder="Email Address"
                  className="p-2 bg-white"
                />

                <input
                  type="text"
                  name=""
                  placeholder="Subject"
                  className="p-2 bg-white"
                />

                <textarea
                  cols={5}
                  rows={3}
                  className="w-full bg-white p-2"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="flex gap-4 justify-end mt-5 mr-2">
                <SlPaperClip fill="#FFBD59" fontSize={30} />

                <button className="bg-[#FFBD59] text-3xl text-white rounded-full px-2 font-bold">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 w-full flex flex-col gap-4">
            <div className="flex items-start justify-start gap-4">
              <FaLocationDot fontSize={70} fill="#FFBD59" />
              <p>
                Century 21 Bldg., Office 103 Abu baker Al Sidiqque Rd Deira
                Dubai, United Arab Emirates P.O Box: 181241
              </p>
            </div>
            <div className="flex items-center gap-4">
              <GoMail fontSize={30} fill="#FFBD59" />
              <a href="#" className="text-lg">
                info@bullseyebrokerage.com
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <MdPhone fontSize={35} fill="#FFBD59" />
              <div className="flex flex-col">
                <p>971 43245732</p>
                <p>971 42230622</p>
              </div>
            </div>
            <div className="flex gap-4">
              <LuClock10 fontSize={35} className="text-[#FFBD59]" />
              <div className="flex flex-col">
                <h5 className="font-bold text-lg">WORKING HOURS:</h5>
                <p>Monday to Saturday</p>
                <p>09:00am - 06:00pm</p>
              </div>
            </div>
            <div className="w-full h-[251px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                width="100%"
                height="100%"
                loading="lazy"
                className="z-40 relative"
              ></iframe>
            </div>

            <div className="flex gap-2">
              <FaRegCopyright fontSize={25} className="text-[#FFBD59]" />
              <p>COPYRIGHT 2024 SVS | ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
