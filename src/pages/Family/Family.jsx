import React from "react";
import family from "../../assets/image/family.png";
import familyBg from "../../assets/image/familyBg.png";

export default function Family() {
  const bgFamily = {
    backgroundImage: `url(${familyBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="bg-no-repeat md:mt-20" style={bgFamily}>
      <div className="container w-4/5 mx-auto mt-10 md:w-5/6">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-6/12 flex flex-col justify-center pt-10 pb-10">
            <div className="w-full">
              <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
                HUBUNGAN & HARMONIS
              </h1>
            </div>
            <p className="text-black md:text-[44px] md:leading-[50px] text-2xl font-bold mt-4">
              Keluarga menjadi support terbaik baginya
            </p>
            <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg md:max-w-[876px]">
              Dalam perjalanan saya sebagai calon legisator, saya ingin menekankan bahwa keluarga saya bukan hanya pendukung,
              tetapi juga merupakan pilar utama kesuksesan dan inspirasi saya. Tanpa cinta, dukungan, dan pemahaman dari
              keluarga, saya tidak akan dapat melangkah maju dengan tekad dan semangat yang sama.
            </p>
          </div>
          <div className="mx-auto md:py-20 my-0">
            <img src={family} alt="Family Image" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
