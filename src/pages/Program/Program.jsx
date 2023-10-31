import React from "react";
import Img from "../../assets/image/bgProgram.png";
import ImgProgram1 from "../../assets/image/program1.png";
import ImgProgram2 from "../../assets/image/program2.png";
import ImgProgram3 from "../../assets/image/program3.png";
import ProgramCard from "../../components/ProgramCard";

export default function Program() {
  const programBg = {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="bg-no-repeat md:mt-20" style={programBg}>
      <div className="flex justify-center md: pt-28">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          PROGRAM
        </h1>
      </div>
      <p className="text-center text-black md:text-[44px] text-2xl font-bold mt-4 md:mt-5">
        Menuju Denpasar yang Lebih Baik
      </p>
      <div className="container grid grid-cols-1 gap-8 mx-auto md:mt-[76px] mb-5 md:grid-cols-3 md:w-5/6">
        <ProgramCard
          title="Pendidikan Unggul"
          subtitle="Fokus pada peningkatan kualitas pendidikan dengan menyesuaikan kurikulum dan memastikan akses setara bagi semua."
          imageUrl={ImgProgram1}
          link=""
        />
        <ProgramCard
          title="Sehat Bersama Rakyat"
          subtitle="Memperkuat infrastruktur kesehatan dan memastikan pelayanan kesehatan yang terjangkau dan berkualitas untuk seluruh komunitas."
          imageUrl={ImgProgram2}
          link=""
        />
        <ProgramCard
          title="Ekonomi Digital"
          subtitle="Mendukung UMKM dan koperasi lokal dengan memberikan pelatihan, sehingga menghasilkan sumber daya dengan potesial digitalisasi."
          imageUrl={ImgProgram3}
          link=""
        />
      </div>
    </div>
  );
}
