import React from "react";
import TimeLine from "./TimeLine";
import TitleWithThe from "./TitleWithThe";

const RoadMap = () => {
  return (
    <div
      className="md:py-20 py-10 w-full md:px-0 px-4 bg-header-gradient"
      id="roadmap"
    >
      <div className="md:px-32">
        <div className="flex flex-col justify-center items-center gap-32">
          <TitleWithThe
            title="ROAD MAP"
            titleClassName="md:text-8xl text-6xl"
            theClassName=""
          />

          <div className="w-full flex items-center justify-center md:px-0 px-8">
            <img
              src="/assets/imgs/Group 30.png"
              alt=""
              className="md:scale-125"
            />
          </div>

          <p className="text-xl text-white">
            From conceptualization, and market research to design, develop,
            testing, launch, and continuous maintenance, each stage is critical
            for the success of SVS Coin. By this comprehensive roadmap, SVS
            Network secures efficient, and valuable ecosystem that meets the
            need of its users and stands out in the competitive market
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
