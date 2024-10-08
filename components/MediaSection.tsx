import React from "react";

const MediaSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-header-gradient">
      <div className="lg:px-32 px-3 md:px-10">
        <div className="flex lg:flex-row flex-col">
          <div className="flex items-center relative">
            <div className="px-6 bg-black rounded-full absolute lg:-left-6 lg:top-20 top-5 lg:text-7xl text-3xl font-bold">
              <span>
                M<span className="text-[#FFBD59]">EDIA</span>
              </span>
            </div>
            <div className="w-full bg-[#FFBD59] p-5 lg:rounded-l-2xl rounded-2xl">
              <div className="grid lg:grid-cols-[2fr_1fr] w-full bg-white p-2">
                <div className="w-full">
                  <img
                    src="/assets/imgs/Group 34 (1).png"
                    alt=""
                    className="w-full lg:h-80 object-cover"
                  />
                </div>
                <div className="flex flex-col lg:ml-6">
                  <p className="text-gray-500 font-semibold">News</p>
                  <p className="text-blue-800 font-semibold">July 29, 2024</p>
                  <h3 className="lg:text-3xl font-bold text-black">
                    Bill Morgan Debunks Viral Rumors On Ripple vs SEC Case
                  </h3>
                  <p className="text-black lg:text-lg text-sm">
                    The Ripple vs SEC legal battles continues with Various
                    rumors, speculations, and uncertainties on this matter.
                    Previously, it was expected that the case would finally b...
                  </p>

                  <a href="#" className="text-black font-semibold mt-5">
                    <span>Read this Article</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-96 rounded-md justify-center p-2 bg-[#FFBD59] lg:mt-0 mt-5">
            <div className="flex flex-col gap-3 px-3">
              <div className="lg:w-96 w-full relative h-52">
                <img
                  src="/assets/imgs/Group 34 (1).png"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="lg:w-96 w-full relative h-52 rounded-2xl">
                <img
                  src="/assets/imgs/Group 34 (1).png"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="lg:w-96 w-full relative h-52 rounded-3xl">
                <img
                  src="/assets/imgs/Group 34 (1).png"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
