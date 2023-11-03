import React, { useState, useEffect } from "react";
import family from "../../assets/image/family.png";
import discussionBg from "../../assets/image/bgdiscussion.png";

export default function Discussion() {
  const bgDiscussion = {
    backgroundImage: `url(${discussionBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // You can set `showVideo` to `true` after a certain event or delay
    // For example, you can use a button click or a timer
    // For this example, we will set it to true immediately
    setShowVideo(true);
  }, []);
  

  return (
    <div className="bg-no-repeat flex items-center" style={bgDiscussion}>
      <div className="w-11/12 md:container mx-auto mt-10 md:w-5/6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-6/12 flex flex-col justify-center pt-10 pb-10">
            <div className="w-full">
              <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
                LEBIH DEKAT
              </h1>
            </div>
            <p className="text-black md:text-[44px] text-2xl font-bold mt-4">
              Dialog dan Diskusi
            </p>
            <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg md:max-w-[876px]">
              Saksikan momen dialog dan diskusi yang tulus antara Kandidat dan warga. Video ini membawa Anda ke tengah-tengah interaksi yang otentik, menunjukkan kesediaan mereka untuk mendengarkan dan merespons kebutuhan masyarakat.
            </p>
          </div>
          <div className="pb-10 md:py-20">
            <img src={family} alt="Family Image" className="w-full md:w-auto rounded-2xl shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
