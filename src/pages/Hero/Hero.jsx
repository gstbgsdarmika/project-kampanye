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
    <div className="bg-no-repeat flex items-center" style={heroBg}>
      <div className="container w-4/5 mx-auto mt-10 md:w-5/6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-6/12 flex flex-col justify-center pt-20 md:pt-10 md:pb-10">
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
          <div className="mx-auto py-10 md:py-20 my-0">
            <img src={heroImg} alt="Hero Image" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
