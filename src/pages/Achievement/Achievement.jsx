import ImgAchievement from "../../assets/image/prestasi.png";
import AchievementCard from "../../components/AchievementCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Achievement() {
  return (
    <div className="w-11/12 mx-auto mt-10 md:container md:w-5/6 md:mt-20">
      <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
        PRESTASI
      </h1>
      <p className="text-black md:text-[44px] text-2xl font-bold mt-4 md:leading-10">
        Mengukir Jejak Prestasi yang Menginspirasi
      </p>
      <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg md:max-w-[876px]">
        Dalam perjalanan hidup ini, prestasi bukan hanya sekadar pencapaian,
        tetapi juga kisah inspiratif yang membimbing langkah-langkah menuju
        keunggulan. Dari keberhasilan besar hingga pencapaian pribadi yang luar
        biasa, setiap prestasi adalah cerminan komitmen, kerja keras, dan tekad
        untuk meraih yang terbaik.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="my-10 mt-10 md:grid-cols-2"
      >
        <SwiperSlide>
          <AchievementCard
            title="Juara 1 Bagus Klungkung 2015"
            subtitle="Tingkat Kabupaten"
            imageUrl={ImgAchievement}
          />
        </SwiperSlide>
        <SwiperSlide>
          <AchievementCard
            title="Juara 1 Bagus Klungkung 2015"
            subtitle="Tingkat Kabupaten"
            imageUrl={ImgAchievement}
          />
        </SwiperSlide>
        <SwiperSlide>
          <AchievementCard
            title="Juara 1 Bagus Klungkung 2015"
            subtitle="Tingkat Kabupaten"
            imageUrl={ImgAchievement}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
