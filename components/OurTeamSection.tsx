import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { memberType, teamData } from "@/dummy/data";
import { TeamSlider } from "./teams";
import Link from "next/link";
import TitleWithThe from "./TitleWithThe";
import { TfiLinkedin } from "react-icons/tfi";

const OurTeamSection = () => {
  return (
    <div className="w-full bg-header-gradient py-32">
      <div className="md:px-32 flex flex-col items-center px-5">
        <div className="flex justify-center flex-col md:w-10/12 w-full">
          <div className="flex md:justify-end justify-center">
            <TitleWithThe
              title="TEAM"
              titleClassName="text-4xl md:text-8xl text-[#FFBD59]"
              theClassName="translate-x-2 md:translate-x-5"
            />
          </div>
          <div className="flex md:flex-row flex-col items-center relative md:mt-0 mt-5">
            <img
              src="/assets/imgs/88888.png"
              className="md:translate-x-2/3 md:w-[277px] md:h-[277px] w-40 md:absolute  -left-72"
              alt=""
            />
            <div className="flex flex-col bg-[#FFBD59] md:pl-48 md:rounded-l-3xl rounded-2xl p-4 md:h-[277px]">
              <p className="md:text-base text-sm">
                With over 20 years of experience in the market, Nader is a
                seasoned business owner known for his strategic vision,
                innovative leadership, and profound industry expertise.
                Throughout his illustrious career, he have successfully
                navigated numerous economic cycles and industry shifts,
                demonstrating remarkable resilience and adaptability. Nader’s
                deep understanding of market dynamics, combined with a
                commitment to customer satisfaction and operational excellence,
                has driven the sustained growth and success of their ventures.
                Renowned for their financial acumen, ethical business practices,
                and effective communication, Nader has built a strong reputation
                as a trusted leader and mentor, continually inspiring and
                developing the next generation of business talent.
              </p>

              <div className="flex md:flex-row gap-5 flex-col items-center md:justify-between justify-start mt-4 md:ml-4">
                <div className="flex flex-col">
                  <h3 className="md:text-5xl font-bold">NADER SAID</h3>
                  <p className="text-lg md:text-2xl font-bold">
                    CEO | Chief Executive Officer
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <a href="">
                    <FaFacebookF fontSize={25} />
                  </a>
                  <a href="">
                    <FaInstagram fontSize={25} />
                  </a>
                  <a href="">
                    <TfiLinkedin fontSize={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-40 gap-10 mt-20 md:w-10/12 w-full">
          <div className="flex md:flex-row flex-col items-center w-full relative">
            <img
              src="/assets/imgs/Group 32.png"
              className="md:min-w-[277px] md:h-[277px] md:absolute w-40 -left-36"
              alt=""
            />
            <div className="min-w-full flex flex-col justify-between bg-[#FFBD59] md:pl-48 md:rounded-l-3xl rounded-2xl p-4 h-[277px] w-full">
              <p className="text-sm md:text-base">
                Seasoned Chief Technology Officer with over 15 years of
                experience in driving technology innovation and excellence. His
                extensive expertise, strategic vision and leadership skills have
                been instumental in advancing the company’s mission and
                achiecing significant milestones.
              </p>

              <div className="flex md:flex-row flex-col items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="md:text-3xl font-bold">YAZAN ABASSI</h3>
                  <p className="md:text-xl  font-bold">
                    CTO | Chief Technology Officer
                  </p>
                </div>
                <div className="flex gap-3 items-center md:mt-0 mt-5">
                  <a href="">
                    <FaFacebookF fontSize={25} />
                  </a>
                  <a href="">
                    <FaInstagram fontSize={25} />
                  </a>
                  <a href="">
                    <TfiLinkedin fontSize={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center w-full relative">
            <img
              src="/assets/imgs/Clip path group (9).png"
              className="md:w-[277px] md:h-[277px] object-cover md:absolute w-40 -left-36"
              alt=""
            />
            <div className="flex justify-between flex-col bg-[#FFBD59] md:pl-48 md:rounded-l-3xl rounded-2xl p-4 md:h-[277px] w-full">
              <p className="text-sm md:text-base">
                Seasoned Chief Technology Officer with over 15 years of
                experience in driving technology innovation and excellence. His
                extensive expertise, strategic vision and leadership skills have
                been instumental in advancing the company’s mission and
                achiecing significant milestones.
              </p>

              <div className="flex md:flex-row flex-col items-center justify-between mt-4 md:ml-4">
                <div className="flex flex-col">
                  <h3 className="md:text-3xl font-bold">YAZAN ABASSI</h3>
                  <p className="md:text-xl font-bold">
                    CTO | Chief Technology Officer
                  </p>
                </div>
                <div className="flex gap-3 items-center md:mt-0 mt-5">
                  <a href="">
                    <FaFacebookF fontSize={25} />
                  </a>
                  <a href="">
                    <FaInstagram fontSize={25} />
                  </a>
                  <a href="">
                    <TfiLinkedin fontSize={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamCard = ({
  image,
  name,
  position,
  desc,
  socialMedia,
  id,
}: memberType) => {
  return (
    <Link href={`/team/${id}`}>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] rounded-3xl z-40 relative overflow-hidden md:px-0 px-6">
          <Image src={image || ""} fill objectFit="cover" alt="" className="" />
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="flex gap-4">
          {socialMedia.facebook && (
            <a
              href={socialMedia.facebook}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaFacebookF color="#111827" fontSize={18} />
            </a>
          )}

          {socialMedia.instagram && (
            <a
              href={socialMedia.instagram}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaInstagram color="#111827" fontSize={18} />{" "}
            </a>
          )}

          {socialMedia.twitter && (
            <a
              href={socialMedia.twitter}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaXTwitter color="#111827" fontSize={18} />
            </a>
          )}

          {socialMedia.linkedin && (
            <a
              href={socialMedia.linkedin}
              className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center"
            >
              <FaLinkedin color="#111827" fontSize={18} />
            </a>
          )}
        </div>
        <p className="text-base">{position}</p>
      </div>
    </Link>
  );
};

export default OurTeamSection;
