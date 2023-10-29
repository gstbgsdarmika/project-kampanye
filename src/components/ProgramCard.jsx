export default function ProgramCard({ title, subtitle, imageUrl, link }) {
  return (
    <div className="items-center justify-center p-4 mx-3 bg-white border shadow-md md:mx-0 md:rounded-3xl rounded-2xl">
      <div className="md:rounded-3xl rounded-2xl">
        <img src={imageUrl} alt="Card Image" />
      </div>
      <p className="pt-4 font-bold text-center text-black md:text-2xl">
        {title}
      </p>
      <p className="text-[#676363] text-center text-lg pt-2 pb-4">{subtitle}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block w-full py-2.5 bg-[#ED1B24] text-white text-center rounded-[999px]"
      >
        Selengkapnya
      </a>
    </div>
  );
}
