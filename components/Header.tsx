"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

import { DM_Sans, Inter, Montserrat } from "next/font/google";

import ThreeDCoin from "./CoinAnimation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BsCoin } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const montserrat = Montserrat({ subsets: ["latin"] });

gsap.registerPlugin(useGSAP);

interface CoinData {
  last_price_usd?: number;
  volume_24_usd?: number;
}

const Header: React.FC = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const logoContainer = useRef(null);
  const volumeRef = useRef(null);
  const priceRef = useRef(null);
  const [volumeCounter, setVolumeCounter] = useState<Number | undefined>(0);

  const [coinData, setCoinData] = useState<CoinData | undefined>(undefined);
  const [error, setError] = useState<Number | undefined>(undefined);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const res = await fetch(
          "https://coincodex.com/api/coincodex/get_coin/svs"
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data: CoinData = await res.json();

        data.volume_24_usd && setVolumeCounter(data.volume_24_usd + 69743);

        setCoinData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getCoinData();
  }, [priceRef, volumeCounter]);

  useEffect(() => {
    // ..coin animation
    gsap.to(logoRef.current, {
      rotationY: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    // ..text animation
    gsap.to(textRef.current, {
      translateX: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power1.inOut",
    });

    // ..logo container animation
    gsap.to(logoContainer.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    // if (coinData?.volume_24_usd) {
    gsap.to(volumeRef.current, {
      innerText: volumeCounter,
      duration: 2,
      snap: {
        innerText: 5,
      },
    });

    // }
  }, [volumeCounter]);

  return (
    <div className="min-h-screen w-full overflow-hidden md:mt-0 mt:pt-0 pt-36 bg-header-gradient">
      <div className="md:px-32 grid lg:grid-cols-[2fr_1.5fr] h-full px-5">
        <div
          className="flex md:mb-0 mb-5 flex-col justify-center md:items-start text-center items-center md:text-left md:mt-40 -translate-x-60 opacity-0"
          ref={textRef}
        >
          <h2 className="md:text-[8rem] text-2xl font-bold md:leading-[7rem] text-[#ffbd58]">
            SVS COIN
          </h2>

          <div className={`flex flex-col  ${montserrat.className}`}>
            <p className="md:text-5xl font-bold md:leading-[3rem]">
              FIRST DECENTRALISED
            </p>
            <p className="md:text-8xl font-bold text-[#ffbd58] leading-[4rem]">
              MARKETING
            </p>
            <p className="md:text-8xl font-bold">PLATFORM</p>
            <p className="md:text-lg mb-2">
              SVS COIN is the first currency to change the world of transaction
            </p>
          </div>

          <div className="flex md:gap-8 gap-4 md:mt-16 md:mb-24 w-full md:px-10 px-4">
            <a
              href="/whitepaper"
              target="_blank"
              className="flex flex-col gap-2 border md:p-3 md:w-auto w-full rounded-lg md:px-6 items-center justify-center p-1 bg-[#ffbd58]"
            >
              <span className="md:text-lg text-xs font-bold">MARKET PRICE</span>
              <div className="flex md:justify-between justify-center gap-2 w-full">
                {/* <div className=""> */}
                <img src="/assets/imgs/coin.png" alt="" className="" />
                {/* </div> */}
                <span className="md:text-3xl text-lg font-bold w-full text-center">
                  1.81
                </span>
              </div>
            </a>

            <a
              href="/whitepaper"
              target="_blank"
              className="flex flex-col gap-2 border md:p-3 rounded-lg md:w-auto w-full md:px-6 items-center justify-center p-2 bg-[#ffbd58]"
            >
              <span className="md:text-lg text-xs font-bold">
                MARKET VOLIME
              </span>
              <div className="flex justify-between items-center w-full md:w-auto">
                <img src="/assets/imgs/coin.png" alt="" />
                <span className="md:text-3xl text-base font-bold w-full text-center">
                  119,530
                </span>
              </div>
            </a>
          </div>
        </div>

        <div
          className="md:flex flex-wrap items-center justify-center opacity-0 relative header-image-container"
          ref={logoContainer}
        >
          <ThreeDCoin />
        </div>
      </div>
    </div>
  );
};

export default Header;
