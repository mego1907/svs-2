import React from "react";
import TitleWithThe from "./TitleWithThe";
import { IoDocumentTextOutline } from "react-icons/io5";

const AboutSvsCoin = () => {
  return (
    <div className="md:py-20 bg-header-gradient w-full min-h-screen">
      <div className="md:px-32">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="w-full h-full relative">
            <img
              src="/assets/imgs/about-img.png"
              alt=""
              className="md:absolute right-0 top-0 md:scale-125 md:flex hidden"
            />

            <div className="translate-y-1/2 -translate-x-1/2 h-full flex flex-col items-end">
              <TitleWithThe title="ABOUT" theClassName="" titleClassName="" />
              <button
                type="button"
                className="md:text-3xl flex items-center font-bold p-2 rounded-lg justify-center bg-[#FFBD59]"
              >
                <IoDocumentTextOutline fontSize={30} />
                <span>WHITE PAPER</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-white md:text-2xl text-sm">
              The <span className="font-bold">SVS Coin</span> represents a
              pioneering digital currency designed to streamline fund management
              across various sectors such as investments, travel & tourism,
              hospitality, healthcare, education, and more. It serves the needs
              of businesses for efficient cash flow management, trade finance,
              and large-scale project funding on a global scale, leveraging
              advance blockchain technologies.
            </p>
            <p className="text-white md:text-2xl text-sm">
              The <span className="font-bold">SVS Coin</span> derives its
              validity from a blockchain technology, a continually expanding
              ledger of records known as blocks. These blocks are interconnected
              and secured using cryptography, with each containing a hash
              pointer linking to the previous block, along with timestamps and
              transaction data. This design ensures that blockchains are highly
              resistant to data tampering, ensuring robust data integrity.
              Managed by a peer-to-peer network, blockchains adhere to protocols
              for validating new blocks, with the block time representing the
              average interval for generating each new block.
            </p>
            <p className="text-white md:text-2xl text-sm">
              <span className="font-bold">SVS Coin</span> offers a streamlined
              and stable solution for both personal and business needs. It
              primarily targets SVS Network members and partners, facilitating
              efficient payments to SVS for a variety of services. On a broader
              scale, <span className="font-bold">SVS Coin</span> supports
              short-term trade requirements and long-term project funding needs
              for investments in infrastructure, healthcare, education, and
              humanitarian initiatives associated with SVS.
            </p>

            <p className="md:text-2xl text-sm text-white font-bold">
              Backed by the SVS Network, actively involved in global investment
              and infrastructure projects, along with significant humanitarian
              efforts in Africa, SVS Coin ensures the utmost stability and
              secuirty for its investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSvsCoin;
