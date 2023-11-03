import GalleryCard from "../../components/GalleryCard";
import galleryImg from "../../assets/image/bgGallery.png";

export default function Gallery() {
  const bgGallery = {
    backgroundImage: `url(${galleryImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      id="gallery"
      className="bg-no-repeat bg-cover md:scroll-my-28 scroll-my-24"
      style={bgGallery}
    >
      <div className="md:w-5/6 container w-11/12 mx-auto md:py-20 py-10">
        <div className="flex justify-center">
          <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
            GALERI
          </h1>
        </div>
        <p className="text-center text-black md:text-[44px] text-xl font-bold mt-4 md:mt-5">
          Komitmen dan Pemimpin Bergerak
        </p>
        <div className="py-5">
          <GalleryCard />
        </div>
      </div>
    </div>
  );
}
