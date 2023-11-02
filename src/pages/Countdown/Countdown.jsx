import React from "react";
import CountdownTimer from "../../components/CountdownTimer";
import Img from "../../assets/image/bgCountdown.png";
import CalendarButton from "../../components/CalendarButton";

export default function Countdown() {
  const targetDate = new Date("2024-02-14T07:00:00+08:00");

  const programBg = {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="bg-no-repeat md:mt-20" style={programBg}>
      <div className="pt-10 pb-10 bg-white bg-opacity-60 md:py-20">
        <div className="flex justify-center">
          <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
            MENUJU PEMILIHAN
          </h1>
        </div>
        <p className="text-center text-black md:text-[44px] text-2xl font-bold mt-7 leading-[50px]">
          Calon DPRD Kota Denpasar
        </p>
        <div className="grid p-10 mx-3 mt-8 mb-5 md:container md:mx-auto md:mt-16 place-items-center md:p-14 md:grid-cols-9 md:w-5/6 rounded-3xl bg-gradient-to-b from-white via-white to-transparent">
          <div className="col-span-9">
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="col-span-9 my-5 md:px-20 md:my-11">
            <p className="text-sm font-normal leading-6 text-center text-black md:text-base md:leading-7 ">
              Setiap suara memiliki kekuatan luar biasa. Suara Anda bukan hanya
              sekadar suara, tetapi juga alat perubahan. Jangan lewatkan
              kesempatan untuk memberikan kontribusi positif dan memilih wakil
              rakyat yang mewakili nilai-nilai dan kebutuhan Anda.
            </p>
          </div>
          <div className="col-span-9">
            <CalendarButton targetDate={targetDate} />
          </div>
        </div>
      </div>
    </div>
  );
}
