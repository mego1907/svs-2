import Image from "next/image";
import React from "react";
import TitleWithThe from "./TitleWithThe";

const PartnersAndSuporters = () => {
  const partnersImages = [
    {
      image: "/assets/images/nwe.png",
      link: "https://azbit.com/exchange/SVS_USDT",
    },
    {
      image: "/assets/images/Coinpaprika-W-f.png",
      link: "https://dex-trade.com/spot/trading/SVSUSDT?interface=classic",
    },

    {
      image: "/assets/images/240px-Uniswap_Logo_and_Wordmark.png",
      link: "https://app.uniswap.org/?intro=true",
    },
  ];

  const listedOnImage = [
    {
      image: "/assets/images/CCC.png",
      link: "https://coinpaprika.com/coin/svs-svs-coin/",
    },
    {
      image: "/assets/images/logo_dark.webp",
      link: "https://www.geckoterminal.com/polygon_pos/pools/0xea6d0718a0b84c90c0764aeaee1a24a06f7cbd2e",
    },
    {
      image: "/assets/images/Coin-2-f.png",
      link: "https://coincodex.com/crypto/svs-coin/",
    },
  ];

  const images = [
    "/assets/imgs/partners/1.png",
    "/assets/imgs/partners/2.png",
    "/assets/imgs/partners/3.png",
    "/assets/imgs/partners/4.png",
    "/assets/imgs/partners/5.png",
    "/assets/imgs/partners/6.png",
    "/assets/imgs/partners/7.png",
    "/assets/imgs/partners/8.png",
    "/assets/imgs/partners/9.png",
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-header-gradient">
      <div className="lg:px-32 lg:px-20 px-5">
        <div className="flex items-center justify-center  w-full lg:text-left flex-col">
          <TitleWithThe
            title="PARTNERS &"
            theClassName="lg:text-5xl text-2xl lg:translate-x-5 translate-x-1"
            titleClassName="lg:text-8xl text-3xl"
          />
          <p className="text-white lg:text-[6rem] font-bold lg:leading-[4rem]">
            COLLABORATIONS
          </p>
        </div>

        <div className="grid lg:grid-cols-5 lg:gap-24 gap-5 lg:mt-44 mt-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center lg:justify-start justify-center "
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersAndSuporters;
