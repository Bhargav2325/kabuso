import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-[1500px] mx-auto md:w-full">
        <div className="bg-whobg text-white h-[304px] md:w-full w-[828px] z-10 mx-auto bg-center flex justify-center items-center text-2xl font-semibold">
          <div className="mt-[23px] text-[65px] text-center relative md:text-3xl">
            <span>WHO WE ARE?</span>
          </div>
        </div>
        <div className="flex xxl:flex-col items-center max-w-[1500px] mx-auto my-20">
          <div className="w-1/2 xxl:w-full">
            <div className="bg-who2bg bg-cover md:bg-cover xxl:mx-auto md:bg-center md:h-[650px] md:w-full flex justify-center items-center h-[645px] w-[978px] md:px-4">
              <div className="flex flex-col text-center">
                <div className="flex justify-center items-center mx-auto text-white rounded-[20px] size-20">
                  <img
                    src="/images/Group1.png"
                    alt="group1"
                    className="mx-auto"
                  />
                </div>
                <h1 className="text-2xl font-semibold text-white mt-5">
                  Embrace the Legacy, Fuel the Meme Revolution
                </h1>
                <p className="text-base text-[#EFEFEF] mt-5 max-w-2xl">
                  Dive into the heart of meme magic at Kabuso, where the spirit
                  of Kabuso, the iconic Shiba Inu behind the Doge meme, lives
                  on. Kabuso inspired millions with her playful glare and
                  unwittingly became a symbol of internet culture. Sadly, Kabuso
                  passed away from leukemia on May 24, 2024, at the age of 18,
                  leaving behind a legacy that continues to influence the
                  digital world.
                </p>
              </div>
            </div>
            <div className="bg-who2bg xxl:mt-20 hidden xxxl:inline-flex xxl:mx-auto md:bg-center bg-cover md:bg-cover justify-center items-center h-[645px] md:h-[650px] md:w-full md:px-4 w-[978px]">
              <div className="flex flex-col text-center">
                <div className="flex justify-center items-center mx-auto text-white rounded-[20px] size-20">
                  <img
                    src="/images/Group2.png"
                    alt="group2"
                    className="mx-auto"
                  />
                </div>
                <h1 className="text-2xl font-semibold text-white mt-5">
                  What is Kabuso Token?
                </h1>
                <p className="text-base text-[#EFEFEF] mt-5 max-w-2xl">
                  Kabuso Token is crafted on the innovative BaseChain platform,
                  merging the whimsical world of memes with robust blockchain
                  technology. Designed for meme enthusiasts and serious
                  investors alike, Kabuso Token celebrates the joy that Kabuso
                  brought to the world while offering a tangible asset in the
                  growing crypto economy.
                </p>
              </div>
            </div>
            <div className="-mt-20 xxl:mt-0">
              <div className="bg-who2bg xxl:mt-20 bg-cover relative xxl:mx-auto md:bg-center md:bg-cover flex justify-center items-center md:h-[650px] h-[692px] md:w-full md:px-4 w-[1049px]">
                <div className="flex flex-col text-center">
                  <div className="flex justify-center items-center mx-auto text-white rounded-[20px] size-20">
                    <img
                      src="/images/Group3.png"
                      alt="group3"
                      className="mx-auto"
                    />
                  </div>
                  <h1 className="text-2xl font-semibold text-white mt-5">
                    Why Join the Kabuso Community?
                  </h1>
                  <p className="text-base text-[#EFEFEF] mt-5 max-w-2xl">
                    Tribute to a Legend: Honor Kabuso's memory by participating
                    in a token that embodies her legacy. Security and
                    Innovation: With BaseChain's cutting-edge technology, your
                    investment in Kabuso is secure and forward-thinking.
                    Engaging Rewards: Earn tokens through interactive community
                    activities that celebrate meme culture.
                  </p>
                  <p className="text-base text-[#EFEFEF] mt-5 max-w-2xl">
                    Experience the Joy of KabusoKabuso was more than just a
                    meme; she was a part of our digital family. At Kabuso, we
                    channel her playful spirit into every aspect of our
                    community and initiatives. From engaging social media events
                    to serious discussions about the future of cryptocurrency,
                    Kabuso is at the heart of it all.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 order-2 -mt-20 xxl:w-full xxl:mt-0 xxxl:hidden">
            <div className="bg-who2bg bg-cover xxl:mx-auto md:bg-center md:bg-cover flex justify-center items-center md:h-[650px] h-[645px] md:w-full w-[978px] md:px-4">
              <div className="flex flex-col text-center">
                <div className="flex justify-center items-center mx-auto text-white rounded-[20px] size-20">
                  <img
                    src="/images/Group2.png"
                    alt="group2"
                    className="mx-auto"
                  />
                </div>
                <h1 className="text-2xl font-semibold text-white mt-5">
                  What is Kabuso Token?
                </h1>
                <p className="text-base text-[#EFEFEF] mt-5 max-w-2xl">
                  Kabuso Token is crafted on the innovative BaseChain platform,
                  merging the whimsical world of memes with robust blockchain
                  technology. Designed for meme enthusiasts and serious
                  investors alike, Kabuso Token celebrates the joy that Kabuso
                  brought to the world while offering a tangible asset in the
                  growing crypto economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
