import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const TheSVSProject = () => {
  return (
    <div className="h-screen bg-header-gradient w-full">
      <div className="p-32">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <TitleWithThe
              title={
                <span>
                  SVS <span className="text-white">PROJECT</span>
                </span>
              }
              titleClassName="text-[6rem]"
            />
            <button
              type="button"
              className="text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4"
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/imgs/Clip path group (8).png"
              alt=""
              className="scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSVSProject;
