import BlogCard from "../../components/BlogCard";
import ImgBlog from "../../assets/image/blogcard.png";
import Blog1 from "../../assets/image/hero.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Blog() {
  return (
    <div id="blog" className="mx-auto py-20 md:scroll-mt-[50px] scroll-mt-5">
      <div className="flex justify-end pe-10 md:pe-[140px]">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block ">
          Blog
        </h1>
      </div>
      <div className="flex items-center">
        <div className="w-full h-[5px] bg-[#ED1B24]"></div>
        <p className="w-full text-right text-black md:text-[44px] text-2xl font-bold mt-4 leading-10 pe-10 md:pe-[140px]">
          Sedikit Cerita dari Kami
        </p>
      </div>
      <div className="w-11/12 md:container mx-auto md:w-5/6">
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
            <BlogCard
              date="Selasa, 23 April 2019"
              description="AA Gede Agung Suyoga Jadi Anggota DPRD Termuda"
              imageUrl={Blog1}
              link="https://www.gesuri.id/amp/pemilu/aa-gede-agung-suyoga-jadi-anggota-dprd-termuda-b1We7ZjtB"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              date="Jumat, 3 April 2020"
              description="Agung Suyoga Sumbangkan Pendapatannya Sebagai Anggota DPRD Bali"
              imageUrl={ImgBlog}
              link="https://radarbali.jawapos.com/bali/amp/70833788/agung-suyoga-sumbangkan-pendapatannya-sebagai-anggota-dprd-bali"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              date="Jumat, 3 April 2020"
              description="Tanggulangi COVID-19, Agung Suyoga Sumbangkan Gaji Anggota DPRD Bali"
              imageUrl={ImgBlog}
              link="https://www.balipost.com/news/2020/04/03/113565/Tanggulangi-COVID-19,Agung-Suyoga-Sumbangkan...html"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              date="Kamis, 16 April 2020"
              description="Agung Suyoga Dukung Gerakan Gizi untuk Medis"
              imageUrl={ImgBlog}
              link="https://www.balipost.com/news/2020/04/16/115950/Agung-Suyoga-Dukung-Gerakan-Gizi...html"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
