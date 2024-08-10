import Image from "next/image";
import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const WhitePaperSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-header-gradient">
      <div className="px-32">
        <div className="flex flex-col">
          <TitleWithThe
            title={
              <span>
                SVS <span className="text-white">PROJECT</span>
              </span>
            }
            titleClassName="text-[9rem]"
          />

          <div className="flex justify-center items-center gap-20 mt-20">
            <button
              type="button"
              className="text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>

            <button
              type="button"
              className="text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
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
