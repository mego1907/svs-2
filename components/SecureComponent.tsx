"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const SecureComponent = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const allCardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "70% 100%",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: descRef.current,
          start: "50% 100%",
        },
      }
    );

    gsap.fromTo(
      allCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: allCardsRef.current,
          start: "50% 110%",
        },
      }
    );
  }, []);

  return (
    <div className="md:py-10 w-full md:px-0 px-3 bg-header-gradient">
      <div className="md:px-32 w-full">
        <div className="grid md:grid-cols-2 gap-10 w-full">
          <div className="flex items-center w-full md:text-left text-left justify-center">
            <div className="flex flex-col w-full">
              <p className="md:text-5xl text-lg font-bold md:leading-[3rem]">
                POWERED BY
              </p>
              <p className="md:text-5xl text-lg font-bold md:leading-[3rem]">
                CUTTING-EDGE
              </p>
              <p className="md:text-[12rem] text-xl font-bold text-[#ffbd58] md:leading-[10rem]">
                BLOCK
              </p>
              <p className="md:text-[12rem] text-xl font-bold md:leading-[10rem]">
                CHAIN
              </p>
              <div className="max-w-full">
                <p className="md:text-xl md:ml-3 text-sm md:mt-auto mt-5">
                  The technology that ensures the highest level of security and
                  transparency in transactions. By decentralizing data storage
                  and processing
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <div className="flex justify-end md:text-left text-center relative">
              <div className="hidden items-center absolute md:left-36 md:flex left-1/2 md:top-1/2 -translate-y-1/2 z-10">
                <img src="/assets/imgs/safe.png" alt="" className="" />
              </div>

              <div className="flex md:flex-row flex-col bg-[#FFBD59] p-6 md:w-9/12 w-full rounded-md md:pl-32 relative">
                <div className="md:-rotate-90 md:translate-x-1 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                  <span className="md:text-6xl text-xl w-8 font-bold tracking-wide uppercase">
                    SAFE
                  </span>
                </div>
                <p className="md:text-xl text-sm text-black">
                  Our platform utilizes state-of-the-art security protocols to
                  safeguard your funds and personal data. We understand the
                  importance of trust and take every measure to ensure your
                  transactions and information are re protected.
                </p>
              </div>
            </div>

            <div className="flex justify-end md:text-left text-center relative">
              <div className="md:flex hidden items-center absolute md:left-36 left-10 top-1/2 -translate-y-1/2 z-10">
                <img src="/assets/imgs/protected.png" alt="" className="" />
              </div>

              <div className="flex md:flex-row flex-col bg-[#FFBD59] p-6 md:w-9/12 w-full rounded-md md:pl-32 relative">
                <div className="md:-rotate-90 md:absolute -left-24 top-1/2 -translate-y-1/2">
                  <span className="md:text-6xl text-xl w-8 font-bold tracking-wide uppercase">
                    PROTECTED
                  </span>
                </div>
                <p className="md:text-xl text-sm text-black">
                  Your funds and assets held on our platform are insured against
                  a range of risks, including theft, cyberattacks, and
                  operational errors. We employ multi-factor authentication
                  (MFA) to add an extra layer of security to your account. This
                  means that even if someone knows your password, they will not
                  be able to access your account without a second form of
                  verification, such as a code sent to your device. We
                  understand the importance of trust and take every measure to
                  ensure your transactions and information are protected
                </p>
              </div>
            </div>

            <div className="flex justify-end md:text-left text-center relative">
              <div className="md:flex hidden items-center absolute md:left-36 left-10 top-1/2 -translate-y-1/2 z-10">
                <img src="/assets/imgs/easy.png" alt="" className="" />
              </div>

              <div className="flex md:flex-row flex-col  bg-[#FFBD59] p-8 md:w-9/12 rounded-md md:pl-32 relative">
                <div className="md:-rotate-90 translate-x-1 md:absolute left-0 top-1/2 -translate-y-1/2">
                  <span className="md:text-6xl text-xl w-8 font-bold tracking-wide uppercase">
                    Easy
                  </span>
                </div>
                <p className="md:text-xl text-sm text-black">
                  Rest assured that your withdrawals are protected by robust
                  security measures. Users can quickly access their funds when
                  needed, providing a hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <h2
          className="text-center md:text-4xl text-xl px-5 md:leading-snug font-semibold"
          ref={titleRef}
        >
          Secure And Transparent Transactions Powered By Cutting-Edge Blockchain
        </h2>
        <p
          className="md:max-w-[70ch] text-center text-gray-400 mt-3 md:leading-7 text-base md:mx-auto font-light"
          ref={descRef}
        >
          Blockchain technology ensures the highest level of security and
          transparency in transactions. By decentralizing data storage and
          processing
        </p>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-24 gap-14 mt-16 md:px-20 px-5"
          ref={allCardsRef}
        >
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <Image
                src="/assets/images/secure.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">Safe platform</h3>
              <p className="text-base text-gray-400">
                Our platform employs state-of-the-art security protocols to
                safeguard your funds and personal data.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <Image
                src="/assets/images/insurance.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">
                Protected by insurance
              </h3>
              <p className="text-base text-gray-400">
                Your funds and assets held on our platform are insured against a
                range of risks, including theft, cyberattacks, and operational
                errors
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <Image
                src="/assets/images/Easy-to-withdraw.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">Easy to withdraw</h3>
              <p className="text-base text-gray-400">
                Rest assured that your withdrawals are protected by robust
                security measures
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SecureComponent;
