import React from "react";
import profile from "../../assets/image/profile.png";
import heroImg from "../../assets/image/hero.png";
import bannerImg from "../../assets/image/banner.png";
import ImgProgram3 from "../../assets/image/program3.png";
import ProgramCard from "../../components/ProgramCard";

export default function Profile() {
  return (
    <div
      id="profile"
      className="container w-4/5 pt-10 mx-auto scroll-my-10 md:w-5/6"
    >
      <div className="flex">
        <div className="flex flex-col justify-center w-6/12 pt-10 pb-10">
          <div className="w-full">
            <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
              PROFILE
            </h1>
          </div>
          <p className=" text-black md:text-[44px] md:leading-[50px] text-2xl font-bold mt-4">
            Anak Agung Gede Agung Suyoga, S.H., M.Kn
          </p>
          <p className="text-red-600 md:text-[28px] text-2xl font-bold mt-4">
            “Aku hanya pelayan rakyat”
          </p>
          <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg md:max-w-[876px]">
            Seorang kandidat yang memiliki dedikasi tinggi dalam melayani
            masyarakat. Gede Agung Suyoga dikenal sebagai individu yang
            berkomitmen pada nilai-nilai keadilan, kebersamaan, dan keterbukaan.
            Dalam visi dan misinya, beliau menekankan pentingnya membangun
            fondasi yang kuat untuk masyarakat yang harmonis dan saling
            mendukung.
          </p>
        </div>
        <div className="py-20 mx-auto my-0">
          <img src={profile} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}
