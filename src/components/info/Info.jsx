import React from "react";

const Info = () => {
  return (
    <>
      <div className="flex justify-center xxl:flex-col w-full items-center max-w-[1500px] mx-auto my-20">
        <div className="w-1/2 xxl:w-full">
          <div className="aboutbg xxl:mx-auto md:bg-center md:bg-cover flex justify-center items-center h-[483px] md:w-full w-[909px]">
            <div className="flex flex-col text-center z-10">
              <h1 className="text-2xl font-semibold text-white mt-5">
                Our Vision
              </h1>
              <p className="text-base text-[#F4F4F4] mt-5 max-w-2xl">
                We envision a world where memes do more than entertain; they
                empower and inspire. Kabuso is dedicated to transforming the
                fleeting joy of meme culture into lasting impact through our
                token, community engagement, and support for animal welfare
                initiatives.
              </p>
            </div>
          </div>
          <div className="my-20 relative z-10">
            <div className="aboutbg flex xxl:mx-auto md:bg-center md:bg-cover justify-center items-center h-[483px] md:w-full w-[909px]">
              <div className="flex flex-col text-center z-10">
                <h1 className="text-2xl font-semibold text-white mt-5">
                  Stay Connected
                </h1>
                <p className="text-base text-[#F4F4F4] mt-5 max-w-2xl">
                  Keep up with all things Kabuso by following us on our social
                  media platforms and joining our community on Telegram. Stay
                  informed, get involved, and share the journey with fellow
                  enthusiasts who believe in the power of memes and the impact
                  of community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 xxl:w-full -mt-20 xxl:mt-0">
          <div className="aboutbg xxl:mx-auto flex justify-center md:bg-center md:bg-cover items-center  h-[483px] md:w-full w-[909px] ">
            <div className="flex flex-col text-center relative z-10">
              <h1 className="text-2xl font-semibold text-white mt-5">
                Start Your Journey with Kabuso
              </h1>
              <p className="text-base text-[#F4F4F4] mt-5 max-w-2xl">
                Ready to be a part of something bigger? Join us at Kabuso to
                trade, connect, and explore the potential of cryptocurrencies
                inspired by the most beloved figures in meme history. Learn more
                about how you can get involved, make a difference, and keep the
                memory of Kabuso alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
