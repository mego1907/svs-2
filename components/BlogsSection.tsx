import React from "react";

const BlogsSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-header-gradient">
      <div className="md:px-32">
        <div className="flex ">
          <div className="flex items-center justify-center">
            <div className="w-96 relative">
              <img
                src="/assets/imgs/Group 34 (1).png"
                alt=""
                className="w-full "
              />
            </div>
          </div>
          <div className="flex items-center relative">
            <div className="px-6 bg-black rounded-full absolute -left-6 top-12 text-7xl font-bold">
              <span>
                B<span className="text-[#FFBD59]">LOGS</span>
              </span>
            </div>
            <div className="w-full bg-[#FFBD59] p-5 rounded-r-2xl ">
              <div className="grid grid-cols-4 gap-10 items-center justify-center h-full">
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
