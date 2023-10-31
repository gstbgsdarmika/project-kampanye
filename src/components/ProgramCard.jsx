export default function ProgramCard({ title, subtitle, imageUrl, link }) {
  return (
    <div className="items-center justify-center p-4 mx-3 bg-white border shadow-md md:mx-0 md:rounded-3xl rounded-2xl">
      <div className="md:rounded-3xl rounded-2xl">
        <img
          className="object-cover w-full rounded-2xl"
          src={imageUrl}
          alt="Card Image"
        />
      </div>
      <p className="pt-4 font-bold text-center text-black text-2xl">{title}</p>
      <p className="text-[#676363] text-center text-base md:text-lg pt-2 mb-4 pb-8 overflow-ellipsis overflow-hidden line-clamp-3 md:max-h-24 max-h-20">
        {subtitle}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block w-full py-2.5 bg-[#ED1B24] text-white text-center rounded-full"
      >
        Selengkapnya
      </a>
    </div>
  );
}
