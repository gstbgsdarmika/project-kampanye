import React from "react";
import Img from "../../assets/image/bgComment.png";
import Send from "../../assets/image/Send.png";
import Input from "../../components/InputField";

export default function Comment() {
  const commentBg = {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="bg-no-repeat md:mt-20" style={commentBg}>
      <div className="pt-10 pb-10 bg-white bg-opacity-60 md:py-20">
        <div className="flex justify-center">
          <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
            Ruang Dukungan
          </h1>
        </div>
        <p className="text-center text-black md:text-[44px] text-2xl font-bold mt-7 leading-[50px]">
          Tinggalkan Pesan Terbaikmu!
        </p>
        <div className="flex justify-center mt-[58px]">
            <div className="mx-4 w-[560px]">
                <Input placeholder="Nama"/>
                <Input placeholder="Email"/>
            </div>
            <div className="w-[560px] h-[155px]">
                <div className="bg-white h-full rounded-[24px] shadow-md px-4 py-6 mb-4">
                    <textarea
                        className="w-full h-full text-gray-700 bg-transparent border-none outline-none placeholder-gray-400 resize-none"
                        placeholder="Tuliskan pesan dukunganmu disini..."
                    ></textarea>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-[#676363]">
            *Keamanan data Anda terjamin. Kami tidak akan memberikan data Anda ke pihak manapun
            </p>
            <div className="mt-[61px]">
                <button className="flex w-[275px] justify-center gap-2 items-center py-2.5 bg-[#ED1B24] text-white text-center rounded-full ">
                    Kirim
                    <img className="h-4" src={Send} alt="Icon Send" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
