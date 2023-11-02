import GalleryCard from "../../components/GalleryCard";
import ImgBlog from "../../assets/image/blogcard.png";
import galleryImg from "../../assets/image/bgGallery.png";

export default function Gallery() {
  const bgGallery = {
    backgroundImage: `url(${galleryImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={bgGallery}>
        <div className="container w-4/5 mx-auto py-10 md:py-20 md:w-5/6 ">
    <div className="flex justify-center">
      <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          Gallery
        </h1>
    </div>
        <div className="flex justify-center items-center">
          <p className="text-black text-center md:text-[44px] text-2xl font-bold mt-4 leading-10">
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
    </div>
  );
}
