import React from "react";
import family from "../../assets/image/family.png";
import discussionBg from "../../assets/image/bgdiscussion.png";


export default function Discussion() {
    const bgDiscussion = {
        backgroundImage: `url(${discussionBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    
      return (
        <div className="bg-no-repeat md:mt-20 flex items-center" style={bgDiscussion}>   
            <div className="container mx-auto flex mt-10 md:w-5/6">
                <div className="flex flex-col justify-center pt-10 pb-10">
                    <div className="w-full">
                        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
                        LEBIH DEKAT
                        </h1>
                    </div>
                        <p className=" text-black md:text-[44px] text-2xl font-bold mt-4">
                        Dialog dan Diskusi
                        </p>
                        <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg md:max-w-[876px]">
                        Saksikan momen dialog dan diskusi yang tulus antara Kandidat dan warga.
                        Video ini membawa Anda ke tengah-tengah interaksi yang otentik,
                        menunjukkan kesediaan mereka untuk mendengarkan dan merespons kebutuhan masyarakat.
                        </p>
                </div>
                <div className="mx-auto py-20 my-0">
                        <img src={family} alt="Hero Image" />
                </div>
            </div>
        </div>
      );
}
