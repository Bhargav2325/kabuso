import React from "react";

const Manu = () => {
  return (
    <>
      <div className="flex flex-wrap md:justify-center justify-end items-center my-20 ml-auto md:mx-auto md:max-w-[1500px] xxl:px-4">
        <a
          href="https://dexscreener.com/base/0x888cba473d3627372585aed15e4bedb0d3b684da"
          target="_blank"
        >
          <div className="flex justify-center bg-clodbg items-center h-[130px] w-[200px] z-10 font-semibold text-2xl">
            <div className="text-[#080574] mix-blend-color-burn pt-5">
              CHART
            </div>
          </div>
        </a>
        <a
          href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x846A6Ed3704031C181b7563c5c02Fe9254c31504"
          target="_blank"
        >
          <div className="flex justify-center bg-clodbg items-center h-[130px] w-[200px] z-10 font-semibold text-2xl">
            <div className="text-[#080574] mix-blend-color-burn pt-5">
              UNISWAP
            </div>
          </div>
        </a>
        <a href="https://t.me/+GwvS-H2y90Q2ZTQx" target="_blank">
          <div className="flex justify-center bg-clodbg items-center h-[130px] w-[200px] z-10 font-semibold text-2xl">
            <div className="text-[#080574] mix-blend-color-burn pt-5">
              TELEGRAM
            </div>
          </div>
        </a>
        <a href="https://x.com/harambasetoken  " target="_blank">
          <div className="flex justify-center bg-clodbg items-center h-[130px] w-[200px] z-10 font-semibold text-2xl">
            <div className="text-[#080574] mix-blend-color-burn pt-5">
              TWITTER
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Manu;
