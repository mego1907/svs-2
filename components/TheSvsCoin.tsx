import Image from "next/image";
import React from "react";
import TitleWithThe from "./TitleWithThe";

const TheSvsCoin = () => {
  return (
    <div className="w-full md:py-20 bg-header-gradient">
      <div className="px-32">
        <div className="flex flex-col gap-20">
          <ValuesSection />
          <VisionSection />
          <MissionSection />
        </div>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div>
        <div className="flex gap-2 items-end">
          <div>
            <TitleWithThe
              title="VALUES"
              theClassName=""
              titleClassName="text-2xl bg-[#FFBD59] text-white rounded-md"
            />
          </div>
          <span className="text-xl">
            At SVS Coin, we are driven by a commitment to innovation,
            continuously advancing the
          </span>
        </div>

        <p className="text-xl">
          boundaries of digital finance to create cutting-edge solutions.
          Integrity is at our core, as we maintain transparency and honesty in
          every interaction. Our focus on security ensures the protection of
          assets and information, while our commitment to sustainability guides
          us to practice responsibly and contribute positively to the global
          community.
        </p>
      </div>
      <div className="flex justify-start">
        <img src="/assets/imgs/Clip path group (7).png" />
      </div>
    </div>
  );
};

const VisionSection = () => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div className="flex justify-end">
        <img src="/assets/imgs/Group 19.png" />
      </div>
      <div>
        <div className="flex gap-2 items-end">
          <span className="text-xl">
            Our primary innovation is ensuring our members and partners
            experience enhanced security and
          </span>
          <div>
            <TitleWithThe
              title="VALUES"
              theClassName=""
              titleClassName="text-2xl bg-[#FFBD59] text-black rounded-md"
            />
          </div>
        </div>

        <p className="text-xl">
          confidentiality, along with seamless global money transfers in record
          time. Additionally, we plan to introduce credit cards for our members
          and partners, futher simplying worldwide transactions.
        </p>
      </div>
    </div>
  );
};

const MissionSection = () => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div>
        <div className="flex gap-2 items-end">
          <div>
            <TitleWithThe
              title="VALUES"
              theClassName=""
              titleClassName="text-2xl bg-white text-[#FFBD59] rounded-md"
            />
          </div>
          <span className="text-xl">
            Our mission is to deliver the most efficient global instant money
            transfer service to our members
          </span>
        </div>

        <p className="text-xl">
          and partners, enabling seamless receipt of funds from loved ones
          worldwide. Whether at home, work or on the move, quick access to
          information, especially during emergencies, reduces overall stress
          levels. SVS Coin ensures rapid access to funds when needed urgently
        </p>
      </div>
      <div className="flex justify-start">
        <img src="/assets/imgs/Group 20.png" />
      </div>
    </div>
  );
};

export default TheSvsCoin;
