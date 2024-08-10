import React from "react";

const SingleNewSection = () => {
  return (
    <div className="bg-header-gradient w-full">
      <div className="md:px-32">
        <div className="flex md:flex-row flex-col md:gap-0 gap-5">
          <div className="flex items-start relative">
            <div className="px-6 bg-black rounded-full absolute -right-10 z-10 -top-4 md:text-7xl font-bold">
              <span>
                N<span className="text-[#FFBD59]">EWS</span>
              </span>
            </div>
            <div className="w-full bg-[#FFBD59] p-5 rounded-l-2xl ">
              <div className="grid md:grid-cols-[2fr_1fr] w-full bg-white p-2">
                <div className="w-full">
                  <img
                    src="/assets/imgs/Group 34 (1).png"
                    alt=""
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="flex flex-col md:ml-6">
                  <p className="text-gray-500 font-semibold">News</p>
                  <p className="text-blue-800 font-semibold">July 29, 2024</p>
                  <h3 className="text-3xl font-bold text-black">
                    Bill Morgan Debunks Viral Rumors On Ripple vs SEC Case
                  </h3>
                  <p className="text-black text-lg">
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
          <div className="flex items-center w-96 rounded-md justify-center p-2 bg-[#FFBD59]">
            <div className="flex flex-col gap-3">
              <div className="md:w-96 relative h-52">
                <img
                  src="/assets/imgs/Group 34 (1).png"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="md:w-96 relative h-52 rounded-2xl">
                <img
                  src="/assets/imgs/Group 34 (1).png"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="md:w-96 relative h-52 rounded-3xl">
                <img
                  src="/assets/imgs/Group 34 (1).png"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SingleNewSection;
