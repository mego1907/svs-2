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
      <div className="px-32 flex flex-col items-center">
        <div className="flex justify-center flex-col w-10/12">
          <div className="flex justify-end">
            <TitleWithThe
              title="TEAM"
              titleClassName="text-3xl text-[#FFBD59]"
            />
          </div>
          <div className="flex items-center relative ">
            <img
              src="/assets/imgs/88888.png"
              className="translate-x-2/3 w-[277px] h-[277px] absolute  -left-72"
              alt=""
            />
            <div className="flex flex-col bg-[#FFBD59] pl-48 rounded-l-3xl p-4 h-[277px]">
              <p className="text-lg">
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

              <div className="flex items-center justify-between mt-4 ml-4">
                <div className="flex flex-col">
                  <h3 className="text-4xl font-bold">NADER SAID</h3>
                  <p className="text-2xl font-bold">
                    CEO | Chief Executive Officer
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <a href="">
                    <FaFacebookF fontSize={35} />
                  </a>
                  <a href="">
                    <FaInstagram fontSize={35} />
                  </a>
                  <a href="">
                    <TfiLinkedin fontSize={35} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-40 mt-20 w-10/12">
          <div className="flex items-center w-full relative">
            <img
              src="/assets/imgs/Group 32.png"
              className="translate-x-2/3 min-w-[277px] h-[277px] absolute -left-80"
              alt=""
            />
            <div className="flex flex-col bg-[#FFBD59] pl-48 rounded-l-3xl p-4 h-[277px] w-full">
              <p className="text-base">
                Seasoned Chief Technology Officer with over 15 years of
                experience in driving technology innovation and excellence. His
                extensive expertise, strategic vision and leadership skills have
                been instumental in advancing the company’s mission and
                achiecing significant milestones.
              </p>

              <div className="flex items-center justify-between mt-4 ml-4">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">YAZAN ABASSI</h3>
                  <p className="text-lg font-bold">
                    CTO | Chief Technology Officer
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <a href="">
                    <FaFacebookF fontSize={35} />
                  </a>
                  <a href="">
                    <FaInstagram fontSize={35} />
                  </a>
                  <a href="">
                    <TfiLinkedin fontSize={35} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full relative">
            <img
              src="/assets/imgs/Clip path group (9).png"
              className="translate-x-2/3 w-[277px] h-[277px] absolute -left-80"
              alt=""
            />
            <div className="flex flex-col bg-[#FFBD59] pl-48 rounded-l-3xl p-4 h-[277px] w-full">
              <p className="text-base">
                Seasoned Chief Technology Officer with over 15 years of
                experience in driving technology innovation and excellence. His
                extensive expertise, strategic vision and leadership skills have
                been instumental in advancing the company’s mission and
                achiecing significant milestones.
              </p>

              <div className="flex items-center justify-between mt-4 ml-4">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">YAZAN ABASSI</h3>
                  <p className="text-lg font-bold">
                    CTO | Chief Technology Officer
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <a href="">
                    <FaFacebookF fontSize={35} />
                  </a>
                  <a href="">
                    <FaInstagram fontSize={35} />
                  </a>
                  <a href="">
                    <TfiLinkedin fontSize={35} />
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
