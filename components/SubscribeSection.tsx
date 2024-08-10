"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
gsap.registerPlugin(ScrollTrigger);

const SubscribeSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        translateY: -200,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "70% 90%",
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-header-gradient md:h-[600px] flex items-center justify-center h-[300px]">
      <div className="md:px-32 w-full">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-bold text-6xl text-[#FFBD59]">
            Get our latest updates!
          </h2>

          <div className="flex items-center justify-center w-full pt-10">
            <div className="translate-x-12">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#FFBD59]">
                <AiOutlineMail fontSize={30} />
              </div>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="bg-white w-full rounded-full py-4 pl-16 text-black outline-none shadow-none"
            />
            <button
              type="button"
              className="p-2 px-8 bg-[#FFBD59] text-white font-bold text-xl rounded-lg"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
