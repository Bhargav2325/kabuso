import React from "react";
import Manu from "../Manu/Manu";
import Could from "../Cloudfaq/Could";
import Info from "../info/Info";
import About from "../about/About";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden -mt-32">
        <div className="pt-32 flex flex-col justify-center items-center min-h-screen mainbg">
          <img
            src="/images/kabusologo.png"
            alt="kabuso logo"
            className="mx-auto"
          />
          <div className="flex justify-start items-center w-full mt-5">
            <div className="w-full md:w-full self-start">
              <img src="/images/dog 1.png" alt="dog 1" />
            </div>
          </div>
          <Manu />
          <Could />
          <Info />
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
