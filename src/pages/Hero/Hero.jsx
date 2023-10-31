import React from "react";
import Img from "../../assets/image/bgHero.png";
import heroImg from "../../assets/image/hero.png";
import bannerImg from "../../assets/image/banner.png";

const Hero = () => {
  const heroBg = {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="bg-no-repeat" style={heroBg}>
      <div className="container mx-auto mt-10 md:w-5/6">
        <div className="flex">
          <div className="w-6/12 flex flex-col justify-center pt-10 pb-10">
            <div className="w-full">
              <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
                PELAYAN RAKYAT
              </h1>
            </div>
            <p className="text-black md:text-[44px] text-2xl font-bold mt-4">
              Agung Suyoga Menyapa!
            </p>
            <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg md:max-w-[876px]">
              Kami dari tim relawan Agung Yoga merupakan tim yang selalu menyertai Agung Yoga dalam kampanye pemilu,
              mari maju demi Bali yang lebih baik lagi untuk kita semua!.
            </p>
          </div>
          <div className="mx-auto py-20 my-0">
            <img src={heroImg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
