import React from "react";

const BlogsSection = () => {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center bg-header-gradient">
      <div className="md:px-32">
        <div className="flex md:flex-row flex-col ">
          <div className="flex items-center justify-center">
            <div className="md:w-96 relative">
              <img
                src="/assets/imgs/Group 34 (1).png"
                alt=""
                className="w-full "
              />
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="px-6 bg-black rounded-full absolute md:-left-6 left-1/2 md:top-12 top-2 md:text-7xl text-3xl font-bold">
              <span>
                B<span className="text-[#FFBD59]">LOGS</span>
              </span>
            </div>
            <div className="w-full bg-[#FFBD59] p-5 md:rounded-r-2xl rounded-2xl md:mb-0 mb-5">
              <div className="grid md:grid-cols-4 gap-10 items-center justify-center h-full">
                <div className=" border-red-500 border-4 rounded-2xl md:w-60 h-60 p-1.5 md:mb-0 mb-2">
                  <img
                    src="/assets/imgs/Group 34 (1).png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className=" border-red-500 border-4 rounded-2xl w-60 h-60 p-1.5 ">
                  <img
                    src="/assets/imgs/Group 34 (1).png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className=" border-red-500 border-4 rounded-2xl w-60 h-60 p-1.5 ">
                  <img
                    src="/assets/imgs/Group 34 (1).png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className=" border-red-500 border-4 rounded-2xl w-60 h-60 p-1.5 ">
                  <img
                    src="/assets/imgs/Group 34 (1).png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
