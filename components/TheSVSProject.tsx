import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const TheSVSProject = () => {
  return (
    <div className="md:h-screen bg-header-gradient w-full md:py-0 py-10">
      <div className="md:p-32 px-5">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <TitleWithThe
              title={
                <span>
                  SVS <span className="text-white">PROJECT</span>
                </span>
              }
              titleClassName="md:text-[6rem] text-3xl"
              theClassName="md:translate-x-5 translate-x-2"
            />
            <button
              type="button"
              className="md:text-5xl font-bold flex items-center justify-center gap-5 bg-[#FFBD59] p-2 rounded-md px-4 md:my-0 my-5"
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/imgs/Clip path group (8).png"
              alt=""
              className="md:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSVSProject;
