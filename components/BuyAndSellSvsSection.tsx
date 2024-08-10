"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const BuyAndSellSvsSection = () => {
  const rightCardsRef = useRef(null);
  const leftCardsRef = useRef(null);
  const mobileRef = useRef(null);

  const data1 = [
    {
      image: "/assets/images/bank.png",
      title: "Bank Transfers",
    },
    {
      image: "/assets/images/wallet.png",
      title: "Online Wallets",
    },
  ];

  const data2 = [
    {
      image: "/assets/images/cash.png",
      title: "Cash Payment",
    },
    {
      image: "/assets/images/debit.png",
      title: "Debit/Credit Cards",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      leftCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftCardsRef.current,
          start: "70% 100%",
        },
      }
    );

    gsap.fromTo(
      rightCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 110%",
        },
      }
    );

    gsap.fromTo(
      mobileRef.current,
      {
        translateY: -500,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 110%",
        },
      }
    );
  }, []);

  return (
    <div className="md:py-16 py-10 bg-header-gradient w-full">
      <div className="md:p-32">
        <div className="grid md:grid-cols-2 w-full md:gap-20">
          <div className="flex justify-end">
            <img
              src="/assets/imgs/BuyAndSell.png"
              alt=""
              className="md:scale-125"
            />
          </div>
          <div>
            <div className="flex flex-col">
              <p className="md:text-[9rem] font-bold -tracking-wider leading-[8rem]">
                How to
              </p>
              <p className="md:text-[5.5rem] font-bold -tracking-wider leading-[4rem]">
                <span className="text-[#3AAA35]">BUY</span> &
                <span className="text-[#FFBD59]">SELL</span>
              </p>
              <p className="md:text-[5.5rem] font-bold -tracking-wider leading-[5rem]">
                <span className="text-[#FFBD59]">SVS</span>
                COIN
              </p>
            </div>
            <div className="flex items-center justify-start gap-8 mt-8">
              <div>
                <img src="/assets/imgs/Group 14.png" alt="" />
              </div>
              <div>
                <img src="/assets/imgs/Group 15.png" alt="" />
              </div>
              <div>
                <img src="/assets/imgs/Clip path group (5).png" alt="" />
              </div>
              <div>
                <img src="/assets/imgs/Clip path group (6).png" alt="" />
              </div>
            </div>
            <p className="md:text-lg mt-8">
              Register and verify your account on the platform. Deposit funds
              using various payment methods such as bank transfer, credit/debit
              card, online wallets or cash payment. Navigate to your wallet on
              the exchange, place a buy or sell order, and choose a withdrawal
              method compatible with your payment preferences. Use the
              exchange’s link for withdrawals to transfer your funds back to
              your bank account or payment method.
            </p>
            <button className="text-xl font-bold flex items-center bg-white text-[#FFBD59] px-4 mt-5 rounded-full">
              <span>Learn more</span>
              <HiArrowLongRight className="text-5xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuyAndSellCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="bg-[#1e2739] flex z-40">
      <div className="flex px-10">
        <div className="flex items-end z-40 relative">
          <img src={img} alt={title} className="z-40 relative block" />
        </div>

        <div className="flex items-center justify-center p-6">
          <h3 className="md:text-xl text-base font-medium">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default BuyAndSellSvsSection;
