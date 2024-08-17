import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const TheSVSProject = () => {
  return (
    <div className="lg:h-screen bg-header-gradient w-full lg:py-0 py-10">
      <div className="lg:p-32 px-5 md:px-10">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <TitleWithThe
              title={
                <span>
                  SVS <span className="text-white">PROJECT</span>
                </span>
              }
              titleClassName="lg:text-[6rem] text-3xl leading-5"
              theClassName="lg:translate-x-4 translate-x-2 lg:-translate-y-3"
            />
            <button
              type="button"
              className="lg:text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4 lg:my-4 my-5"
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/imgs/Clip path group (8).png"
              alt=""
              className="lg:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSVSProject;
