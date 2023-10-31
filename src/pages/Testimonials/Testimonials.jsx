import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/image/alvin.png";
import TestimonialsCard from "../../components/TestimonialsCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <div className="w-11/12 mx-auto my-10 md:container md:my-20 md:w-5/6">
      <div className="flex justify-center">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          TESTIMONI
        </h1>
      </div>
      <div className="text-center">
        <p className="text-black md:text-[44px] text-2xl font-bold mt-5 leading-10">
          Apa kata mereka
        </p>
        <p className="mt-5 text-sm font-normal text-black md:text-lg">
          Berikut sejumlah testimoni dari pendukung setia kandidat. Suara -
          suara ini mencerminkan dampak positif yang telah dihasilkan oleh
          kandidat dalam komunitas. Dari warga biasa hingga pemimpin komunitas,
          mari kita dengarkan pengalaman yang menginspirasi
        </p>
      </div>
      <div className="grid gap-3 mt-10 md:mt-20 md:gap-5 md:grid-cols-3">
        <TestimonialsCard
          testimonials="Saya mendukung Agung Suyoga jadi calon DPRD Kota Denpasar karena lihat hasil kerja beliau yang sepertinya mengutamakan kepentingan masyarakat. Semoga dia bisa buktikan janjinya dan bawa perubahan positif buat daerah kita."
          imageUrl={img}
          name="Alvin Wirapratama"
          subtitle="Pencari Pacar Muslim"
        />
        <TestimonialsCard
          testimonials="Saya mendukung Agung Suyoga jadi calon DPRD Kota Denpasar karena lihat hasil kerja beliau yang sepertinya mengutamakan kepentingan masyarakat. Semoga dia bisa buktikan janjinya dan bawa perubahan positif buat daerah kita."
          imageUrl={img}
          name="Alvin Wirapratama"
          subtitle="Pencari Pacar Muslim"
        />
        <TestimonialsCard
          testimonials="Saya mendukung Agung Suyoga jadi calon DPRD Kota Denpasar karena lihat hasil kerja beliau yang sepertinya mengutamakan kepentingan masyarakat. Semoga dia bisa buktikan janjinya dan bawa perubahan positif buat daerah kita."
          imageUrl={img}
          name="Alvin Wirapratama"
          subtitle="Pencari Pacar Muslim"
        />
      </div>
    </div>
  );
}
