"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Panel } from "primereact/panel";
import gsap from "gsap";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const TokenSVSSection = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const collapseRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      collapseRef.current,
      {
        translateX: -500,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: collapseRef.current,
          start: "70% 120%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        translateX: 500,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: collapseRef.current,
          start: "70% 120%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-header-gradient flex justify-center items-center">
      <div className="md:px-32">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <TitleWithThe
                title={
                  <span>
                    SVS <span className="text-white">PROJECT</span>
                  </span>
                }
                titleClassName="md:text-[6rem]"
              />
              <button
                type="button"
                className="md:text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
              >
                <IoDocumentTextOutline />
                <span>SVS TOKEN</span>
              </button>
            </div>
            <p className="ml-12 mt-8">
              SVS Coin is a token developed for facilitating the payment of the
              fees, expenses and Return of investment ( ROI ) of SVS Network's
              Projects worldwide . it will be created with a strict maximum
              limit of 5,000 million units, a number that can never be increased
            </p>

            {/* <div className="flex flex-col">
              <div className="flex px-5 justify-between">
                <p>What is Token SVS?</p>
                <FaPlus />
              </div>
            </div> */}
          </div>
          <div>
            <img src="/assets/imgs/Group 31.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSVSSection;
