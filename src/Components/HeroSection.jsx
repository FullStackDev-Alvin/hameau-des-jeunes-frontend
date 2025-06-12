import React from "react";
import hero from "/imagr.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative h-[800px] max-h-[800px] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-40" />

      {/* Floating Card */}
      <div className="relative z-10 p-6 max-w-[400px] w-fit md:w-[500px] backdrop-blur-md bg-bg border border-black/20  shadow-lg text-black text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 border-b-4 border-primary w-fit">
          HAMEAU DES JEUNES SAINT KIZITO MUSHA
        </h1>
        <p className="mb-6 text-sm md:text-base">
          “Empowering Youth, Building Communities”
        </p>
        {/* <button className="bg-primary hover:bg-primary/70 hover:cursor-pointer text-white font-semibold py-2 px-6 transition-all duration-300">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;

