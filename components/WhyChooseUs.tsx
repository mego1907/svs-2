"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import TitleWithThe from "./TitleWithThe";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const imageRef = useRef(null);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);

  const data1 = [
    {
      image: "/assets/images/icon-4 (1).png",
      title: "Experience:",
      desc: "With SVS COIN years of experience in the crypto industry, we bring deep expertise and a proven track record of delivering results.",
    },
    {
      image: "/assets/images/icon-6 (1).png",
      title: "Range of Services:",
      desc: "Whether you're a seasoned investor or new to cryptocurrencies, we offer a comprehensive range of services tailored to meet your needs.",
    },
  ];

  const data2 = [
    {
      image: "/assets/images/icon-6 (1).png",
      title: "Approach:",
      desc: "We prioritize our clients' needs above all else, offering personalized support and guidance every step of the way.",
    },
    {
      image: "/assets/images/icon-5 (1).png",
      title: "Innovation and Vision:",
      desc: "Beyond the present, we envision the future ol finance. Our innovative solutions pave the way for tomorrow's digital economy:",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      leftCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftCardsRef.current,
          start: "70% 170%",
        },
      }
    );

    gsap.fromTo(
      rightCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 170%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        translateY: -500,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 170%",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col w-full">
      <WhyExperienceSection />
      <WhyApproachSection />
      <WhyInnovationSection />
      <WhyServiceSection />
    </div>
  );
};

const WhyExperienceSection = () => {
  return (
    <div className="md:py-10 w-full h-[80vh] flex items-center justify-center bg-header-gradient">
      <div className="md:px-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col relative items-center gap-8 md:items-end md:text-right text-center">
            <TitleWithThe
              title="Why"
              theClassName=""
              titleClassName="md:text-8xl text-6xl"
            />
            <h5 className="md:text-5xl font-bold tracking-wider">EXPERIENCE</h5>
            <p className="md:text-2xl md:max-w-[33ch]">
              A dynamic and evolving experience that blends financial innovation
              with technology advancements. We have team of experienced
              blockchain developers, cryptographers and software engineers who
              understand the complexities of blockchain technology, consensus
              mechanisms, and smart contract development.
            </p>
            <button
              type="button"
              className="md:text-4xl bg-[#FFBD59] font-bold p-1 rounded-xl"
            >
              WATCH VIDEO
            </button>
          </div>
          <div className="w-full relative">
            <img src="/assets/imgs/why-image.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyApproachSection = () => {
  return (
    <div className="py-10 relative w-full h-[80vh] flex items-center justify-center bg-header-gradient">
      <div className="md:px-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex relative flex-col gap-8 items-center md:items-end text-right">
            <TitleWithThe
              title="Why"
              theClassName=""
              titleClassName="md:text-8xl text-6xl"
            />
            <h5 className="md:text-5xl font-bold tracking-wider">APPROACH</h5>
            <p className="md:text-2xl md:max-w-[35ch]">
              We prioritize our clients' needs above all else, offering
              personalized support and guidance every step of the way. Focusing
              on creating user-friendly interfaces and seamless user experience.
              Maintaining transparency in operations, development process, and
              decision-making
            </p>
            <button
              type="button"
              className="text-4xl bg-[#FFBD59] font-bold p-1 rounded-xl"
            >
              WATCH VIDEO
            </button>
          </div>
          <div className="w-full relative">
            <img src="/assets/imgs/Group 16.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyInnovationSection = () => {
  return (
    <div className="py-10 w-full h-[80vh] flex items-center justify-center bg-header-gradient">
      <div className="md:px-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8 items-center md:items-end text-right">
            <TitleWithThe
              title="Why"
              theClassName=""
              titleClassName="md:text-8xl text-6xl"
            />
            <h5 className="md:text-5xl font-bold tracking-wider">INNOVATION</h5>
            <p className="md:text-2xl md:max-w-[33ch]">
              Beyond the present, we envision the future of finance. Our
              innovative solutions pave the way for tomorrow's digital economy.
              Leveraging technology, such as scalable consensus algorithms,
              layer 2 solution, and privacy-enhancement techniques. Innovating
              in areas like interoperability and cross-chain solutions to
              increase utility.
            </p>
            <button
              type="button"
              className="md:text-4xl bg-[#FFBD59] font-bold p-1 rounded-xl"
            >
              WATCH VIDEO
            </button>
          </div>
          <div className="w-full relative">
            <img src="/assets/imgs/Group 17.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyServiceSection = () => {
  return (
    <div className="py-10 w-full relative h-[80vh] flex items-center justify-center bg-header-gradient">
      <div className="md:px-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center gap-8 md:items-end md:text-right text-center">
            <TitleWithThe
              title="Why"
              theClassName=""
              titleClassName="md:text-8xl text-6xl"
            />
            <h5 className="md:text-5xl font-bold tracking-wider">SERVICE</h5>
            <p className="md:text-2xl md:max-w-[33ch]">
              Whether you're a seasoned investor or new to cryptocurrencies, we
              offer a comprehensive range of services tailored to meet your
              needs. Building partnerships with other blockchain projects,
              financial institutions, and technology companies to expand SVS
              ecosystem.,
            </p>
            <button
              type="button"
              className="text-4xl bg-[#FFBD59] font-bold p-1 rounded-xl"
            >
              WATCH VIDEO
            </button>
          </div>
          <div className="w-full relative">
            <img src="/assets/imgs/Group 18.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
