export default function ProgramCard({ title, subtitle, imageUrl, link }) {
  return (
    <div className="items-center justify-center p-4 mx-3 bg-white border shadow-md md:mx-0 md:rounded-3xl rounded-2xl">
      <div className="md:rounded-3xl">
        <img
          className="object-cover w-full rounded-2xl"
          src={imageUrl}
          alt="Card Image"
        />
      </div>
      <p className="pt-4 text-2xl md:text-[28px] font-bold text-center text-black">
        {title}
      </p>
      <p className="text-[#676363] text-center text-base md:text-lg pt-2 mb-4 pb-8 overflow-ellipsis overflow-hidden line-clamp-3 md:max-h-24 max-h-20">
        {subtitle}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block w-full md:py-2.5 py-3 bg-[#C73027] text-white text-center md:text-[22px] text-[19.266px] rounded-full"
      >
        Telusuri
      </a>
    </div>
  );
}
