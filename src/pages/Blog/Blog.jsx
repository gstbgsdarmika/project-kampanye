import BlogCard from "../../components/BlogCard";
import ImgBlog from "../../assets/image/blogcard.png";

export default function Blog() {
  return (
    <div className="container w-4/5 mx-auto my-10 md:w-5/6 md:my-20">
    <div className="flex justify-end">
      <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          Blog
        </h1>
    </div>
        <div className="flex justify-between items-center">
          <div className="w-6/12 h-[5px] bg-[#ED1B24]"></div>
          <p className="text-black md:text-[44px] text-2xl font-bold mt-4 leading-10">
          Sedikit Cerita dari Kami
        </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-[74px]">
          <BlogCard
            date="Senin, 20 September 2023"
            description="Anggota Termuda DPRD Bali, Agung Suyoga Janji Perjuangkan Generasinya"
            imageUrl={ImgBlog}
          />
          <BlogCard
            date="Senin, 20 September 2023"
            description="Anggota Termuda DPRD Bali, Agung Suyoga Janji Perjuangkan Generasinya"
            imageUrl={ImgBlog}
          />
        </div>
    </div>
  );
}
