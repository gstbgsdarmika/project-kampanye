import React from "react";
import Img from "../../assets/image/bgProgram.png";
import ImgProgram1 from "../../assets/image/program 1.png";
import ImgProgram2 from "../../assets/image/program 2.png";
import ImgProgram3 from "../../assets/image/program 3.png";
import ProgramCard from "../../components/ProgramCard";

export default function Program() {
  const programBg = {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      id="program"
      className="bg-no-repeat scroll-mt-5 md:mt-20"
      style={programBg}
    >
      <div className="flex justify-center pt-16 md:pt-28">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          PROGRAM
        </h1>
      </div>
      <p className="text-center text-black md:text-[44px] text-xl font-bold mt-4 md:mt-5">
        Menuju Denpasar yang Lebih Baik
      </p>
      <div className="container grid grid-cols-1 gap-8 mx-auto md:mt-[76px] mb-5 md:grid-cols-3 md:w-5/6 md:pb-36 mt-10 pb-16">
        <ProgramCard
          title="Gizi untuk Medis"
          subtitle="Pendistribusian makanan siap saji kepada tenaga kesehatan di tingkat kecamatan (puskesmas) pada masa COVID-19"
          imageUrl={ImgProgram1}
          link="https://www.instagram.com/p/B_CtA4mAbCR/?
          utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        />
        <ProgramCard
          title="Sidak Kuliner"
          subtitle="Agenda rutin setiap jam 20.00 malam pada saat PPKM Darurat untuk membeli dagangan UMKM dan didistribusikan kepada Pecalang, Linmas, dan masyarakat umum"
          imageUrl={ImgProgram2}
          link="https://www.instagram.com/p/CRlmHEZl15Z/?
          utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        />
        <ProgramCard
          title="Pembuatan NIB"
          subtitle="Bekerjasama dengan gama law untuk membantu para UMKM membuat Nomor Induk Berusaha"
          imageUrl={ImgProgram3}
          link="https://www.instagram.com/reel/Cxz1gKCSmKn/?
          utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        />
      </div>
    </div>
  );
}
