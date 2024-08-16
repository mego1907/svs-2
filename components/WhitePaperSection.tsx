import Image from "next/image";
import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const WhitePaperSection = () => {
  return (
    <div className="w-full md:h-screen md:py-0 py-10 flex items-center justify-center bg-header-gradient">
      <div className="md:px-32 px-5">
        <div className="flex flex-col">
          <TitleWithThe
            title={
              <span>
                SVS <span className="text-white">PROJECT</span>
              </span>
            }
            titleClassName="md:text-8xl text-3xl"
            theClassName="md:translate-x-5 translate-x-2"
          />

          <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 gap-5 md:mt-20 mt-10">
            <button
              type="button"
              className="md:text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>

            <button
              type="button"
              className="md:text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
            >
              <IoDocumentTextOutline />
              <span>SVS TOKEN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaperSection;
