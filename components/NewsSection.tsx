"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TitleWithThe from "./TitleWithThe";

type SingleNewType = {
  id: number;
  imageurl: string;
  title: string;
  body: string;
};

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      const news = await response.json();

      setNewsData(news.Data);

      return news;
    };
    getData();
  }, []);

  // const data = [
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/medi2-scaled-1.jpg",
  //     title: "Events",
  //     id: 1,
  //   },
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/medi1-scaled-1.jpg",
  //     title: "Media",
  //     id: 2,
  //   },
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/media3-scaled-1.jpg",
  //     title: "News",
  //     id: 3,
  //   },
  // ];

  return (
    <div className="py-20 bg-header-gradient w-full">
      <div className="lg:px-32">
        <div className="flex items-center justify-center">
          <TitleWithThe title="News" />
        </div>

        <div className="grid items-center justify-center lg:grid-cols-3 gap-20 mt-20">
          <div className="flex items-center justify-center">
            <div className="lg:w-96 relative">
              <img
                src="/assets/imgs/Group 34 (1).png"
                alt=""
                className="w-full "
              />
              <div className="px-6 bg-black rounded-full absolute -right-6 -bottom-3 lg:text-7xl text-3xl font-bold">
                <span>
                  B<span className="text-[#FFBD59]">LOGS</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="lg:w-96 relative">
              <img
                src="/assets/imgs/Group 34 (1).png"
                alt=""
                className="w-full "
              />
              <div className="px-6 bg-black rounded-full absolute -right-6 -bottom-3 lg:text-7xl text-3xl font-bold">
                <span>
                  M<span className="text-[#FFBD59]">EDIA</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="lg:w-96 relative">
              <img
                src="/assets/imgs/Group 34 (1).png"
                alt=""
                className="w-full "
              />
              <div className="px-6 bg-black rounded-full absolute -right-6 -bottom-3 lg:text-7xl text-3xl font-bold">
                <span>
                  N<span className="text-[#FFBD59]">EWS</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewCard = ({
  image,
  title,
  id,
  imageurl,
}: {
  image?: string;
  title: string;
  id: number;
  imageurl: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" id="news">
      <div className="relative lg:w-[353px] w-72 h-[235px] z-40">
        {/* <Image
          src={image ? image : imageurl}
          alt={title}
          fill
          objectFit="contain"
        /> */}
        <img
          src={imageurl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="lg:text-3xl text-xl font-semibold text-center">{title}</h3>

      <a
        href={`/news/${id}`}
        className="p-2 px-6 rounded-sm bg-secondary z-40 mt-6"
      >
        Click here
      </a>
    </div>
  );
};

export default NewsSection;
