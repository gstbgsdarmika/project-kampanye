import BlogCard from "../../components/BlogCard";
import ImgBlog from "../../assets/image/blogcard.png";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Blog() {
  return (
    <div className="container w-4/5 mx-auto md:w-5/6 py-20">
      <div className="flex justify-end">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          Blog
        </h1>
      </div>
      <div className="flex items-center">
        <div className="w-full h-[5px] bg-[#ED1B24]"></div>
        <p className="w-full text-right text-black md:text-[44px] text-2xl font-bold mt-4 leading-10">
          Sedikit Cerita dari Kami
        </p>
      </div>
      <div className="container w-4/5 mx-auto md:w-5/6">
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
              date="Senin, 20 September 2023"
              description="Anggota Termuda DPRD Bali, Agung Suyoga Janji Perjuangkan Generasinya"
              imageUrl={ImgBlog}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              date="Senin, 20 September 2023"
              description="Anggota Termuda DPRD Bali, Agung Suyoga Janji Perjuangkan Generasinya"
              imageUrl={ImgBlog}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard
              date="Senin, 20 September 2023"
              description="Anggota Termuda DPRD Bali, Agung Suyoga Janji Perjuangkan Generasinya"
              imageUrl={ImgBlog}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
