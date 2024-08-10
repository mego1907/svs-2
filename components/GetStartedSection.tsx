"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GetStartedSection = () => {
  const allCardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      allCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: allCardsRef.current,
          start: "50% 110%",
        },
      }
    );
  }, []);

  return (
    <div className="md:py-10 md:pt-20 w-full bg-header-gradient">
      <div className="md:px-32">
        <div className="grid md:grid-cols-[2fr_1fr] gap-20 justify-center items-center py-20">
          <div className="grid md:grid-cols-3 justify-center items-center">
            <div className="flex flex-col items-center justify-center p-4 relative">
              <img
                src="/assets/imgs/Rigister.png"
                alt=""
                className="md:w-40 absolute md:-top-24 -top-10 left-1/2 -translate-x-1/2"
              />

              <div className="grid items-center justify-center text-center p-3 bg-[#54482F] rounded-md pt-20 h-72">
                <h3 className="md:text-4xl font-bold text-white">Register</h3>
                <p className="md:text-xl mt-5 font-light">
                  Create an account via our intuitive, user-friendly desktop &
                  App platforms.
                </p>
              </div>
            </div>
            <div className="grid items-center justify-center p-4 relative">
              <img
                src="/assets/imgs/Fund.png"
                alt=""
                className="md:w-56 w-32 absolute md:-top-24 -top-6 left-1/2 -translate-x-1/2"
              />

              <div className="flex flex-col items-center justify-center text-center p-3 bg-[#54482F] rounded-md pt-20 h-72">
                <h3 className="text-4xl font-bold text-white">Fund</h3>
                <p className="text-xl mt-5 font-light">
                  Make your first deposit! Choose from a variety of deposit
                  methods, including bank transfer, credit/debit card, and
                  digital wallets.
                </p>
              </div>
            </div>
            <div className="grid items-center justify-center p-4 relative">
              <img
                src="/assets/imgs/Trade.png"
                alt=""
                className="md:w-40 absolute -top-24 left-1/2 -translate-x-1/2"
              />

              <div className="flex flex-col items-center justify-center text-center p-3 bg-[#54482F] rounded-md pt-20 h-72">
                <h3 className="text-4xl font-bold text-white">Trade</h3>
                <p className="text-xl mt-5 font-light">
                  Start trading on SVS Coin with confidence with the most fast
                  and secure platform.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative z-10">
            <img
              src="/assets/imgs/get-started.png"
              alt=""
              className="md:scale-125 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
