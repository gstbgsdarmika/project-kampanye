import GalleryCard from "../../components/GalleryCard";

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="w-11/12 mx-auto mt-10 md:container md:w-5/6 md:scroll-my-28 scroll-my-24 md:mt-20"
    >
      <div className="flex justify-center">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          GALERI
        </h1>
      </div>
      <p className="text-center text-black md:text-[44px] text-xl font-bold mt-4 md:mt-5">
        Komitmen dan Pemimpin Bergerak
      </p>
      <GalleryCard />
    </div>
  );
}
