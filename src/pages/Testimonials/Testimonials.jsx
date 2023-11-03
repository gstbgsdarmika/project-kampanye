import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/image/alvin.png";
import TestimonialsCard from "../../components/TestimonialsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <div className="my-10 md:my-20">
      <div className="justify-center w-11/12 mx-auto text-center md:container md:w-2/4">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          TESTIMONI
        </h1>
        <p className="text-black md:text-[44px] text-2xl font-bold mt-5 md:leading-10">
          Apa kata mereka
        </p>
        <p className="mt-5 text-sm font-normal text-black md:text-lg">
          Berikut sejumlah testimoni dari pendukung setia kandidat. Suara -
          suara ini mencerminkan dampak positif yang telah dihasilkan oleh
          kandidat dalam komunitas. Dari warga biasa hingga pemimpin komunitas,
          mari kita dengarkan pengalaman yang menginspirasi
        </p>
      </div>
      <div className="container w-11/12 mx-auto md:w-4/5">
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
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          className="my-10 md:my-16"
        >
          <SwiperSlide>
            <TestimonialsCard
              testimonials="Saya mendukung Agung Suyoga jadi calon DPRD Kota Denpasar karena lihat hasil kerja beliau yang sepertinya mengutamakan kepentingan masyarakat. Semoga dia bisa buktikan janjinya dan bawa perubahan positif buat daerah kita."
              imageUrl={img}
              name="Alvin Wirapratama"
              subtitle="Pencari Pacar Muslim"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard
              testimonials="Saya mendukung Agung Suyoga jadi calon DPRD Kota Denpasar karena lihat hasil kerja beliau yang sepertinya mengutamakan kepentingan masyarakat. Semoga dia bisa buktikan janjinya dan bawa perubahan positif buat daerah kita."
              imageUrl={img}
              name="Alvin Wirapratama"
              subtitle="Pencari Pacar Muslim"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard
              testimonials="Saya mendukung Agung Suyoga jadi calon DPRD Kota Denpasar karena lihat hasil kerja beliau yang sepertinya mengutamakan kepentingan masyarakat. Semoga dia bisa buktikan janjinya dan bawa perubahan positif buat daerah kita."
              imageUrl={img}
              name="Alvin Wirapratama"
              subtitle="Pencari Pacar Muslim"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsCard
              testimonials="Saya mendukung Agung Suyoga jadi calon DPRD Kota Denpasar karena lihat hasil kerja beliau yang sepertinya mengutamakan kepentingan masyarakat. Semoga dia bisa buktikan janjinya dan bawa perubahan positif buat daerah kita."
              imageUrl={img}
              name="Alvin Wirapratama"
              subtitle="Pencari Pacar Muslim"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
