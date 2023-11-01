import GalleryCard from "../../components/GalleryCard";
import ImgBlog from "../../assets/image/blogcard.png";

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="container w-4/5 py-20 mx-auto md:w-5/6 md:my-20"
    >
      <div className="flex justify-center">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          Gallery
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-black md:text-[44px] text-2xl font-bold mt-4 leading-10">
          Komitmen dan Pemimpin Bergerak
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-[74px]">
        <GalleryCard
          date="Senin, 20 September 2023"
          description="Dialog Bersama"
          imageUrl={ImgBlog}
        />
        <GalleryCard
          date="Senin, 20 September 2023"
          description="Dialog Sendiri"
          imageUrl={ImgBlog}
        />
        <GalleryCard
          date="Senin, 20 September 2023"
          description="Dialog Sendiri"
          imageUrl={ImgBlog}
        />
        <GalleryCard
          date="Senin, 20 September 2023"
          description="Dialog Sendiri"
          imageUrl={ImgBlog}
        />
        <GalleryCard
          date="Senin, 20 September 2023"
          description="Dialog Sendiri"
          imageUrl={ImgBlog}
        />
        <GalleryCard
          date="Senin, 20 September 2023"
          description="Dialog Sendiri"
          imageUrl={ImgBlog}
        />
      </div>
    </div>
  );
}
