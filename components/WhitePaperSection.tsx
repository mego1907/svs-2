import Image from "next/image";
import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const WhitePaperSection = () => {
  return (
    <div className="w-full lg:h-screen lg:py-0 py-10 flex items-center justify-center bg-header-gradient">
      <div className="lg:px-32 px-5">
        <div className="flex flex-col">
          <TitleWithThe
            title={
              <span>
                SVS <span className="text-white">PROJECT</span>
              </span>
            }
            titleClassName="lg:text-[9rem] text-3xl"
            theClassName="lg:translate-x-5 translate-x-2"
          />

          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-5 lg:mt-20 mt-10">
            <button
              type="button"
              className="lg:text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>

            <button
              type="button"
              className="lg:text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
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
