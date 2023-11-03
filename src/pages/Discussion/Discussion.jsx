import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import discussionBg from "../../assets/image/bgdiscussion.png";

export default function Discussion() {
  const bgDiscussion = {
    backgroundImage: `url(${discussionBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Anda dapat mengatur `showVideo` menjadi `true` setelah suatu kejadian atau penundaan tertentu
    // Sebagai contoh, Anda dapat menggunakan klik tombol atau timer
    // Untuk contoh ini, kita akan mengaturnya menjadi true segera
    setShowVideo(true);
  }, []);

  return (
    <div className="bg-no-repeat flex items-center" style={bgDiscussion}>
      <div className="w-11/12 md:container mx-auto py-10 md:w-5/6">
        <div className="flex md:gap-x-7 gap-y-10 py-10 flex-col md:flex-row">
          <div className="w-full md:w-6/12 flex flex-col justify-center">
            <div className="w-full">
              <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
                LEBIH DEKAT
              </h1>
            </div>
            <p className="text-black md:text-[44px] text-2xl font-bold mt-4">
              Dialog dan Diskusi
            </p>
            <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg md:max-w-[876px]">
              Saksikan momen dialog dan diskusi yang tulus antara Kandidat dan
              warga. Video ini membawa Anda ke tengah-tengah interaksi yang
              otentik, menunjukkan kesediaan mereka untuk mendengarkan dan
              merespons kebutuhan masyarakat.
            </p>
          </div>
          <div className="md:w-[719.18px] md:h-[491px] md:rounded-[25px] w-[350px] h-[200px] mx-auto">
            <div className="overflow-hidden rounded-xl md:w-[719.18px] md:h-[491px] md:rounded-[25px] w-[350px] h-[200px]">
              {showVideo ? (
                <ReactPlayer
                  className="md:rounded-[25px]"
                  url="https://youtu.be/900XInzx310?si=HzwOaX_qVwvb43Dq"
                  width="100%"
                  height="100%"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
