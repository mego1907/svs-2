import Image from "next/image";
import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const WhitePaperSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-header-gradient">
      <div className="md:px-32">
        <div className="flex flex-col">
          <TitleWithThe
            title={
              <span>
                SVS <span className="text-white">PROJECT</span>
              </span>
            }
            titleClassName="md:text-[9rem] text-2xl"
          />

          <div className="flex md:flex-row flex-col justify-center items-center gap-20 mt-20">
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
