export default function TestimonialsCard({
  testimonials,
  imageUrl,
  name,
  subtitle,
}) {
  return (
    <div className="px-3 bg-white  shadow-[0px_24px_65px_0px_rgba(20,20,43,0.16)] p-4 rounded-2xl">
      <p className="text-[#5D5A88] text-sm md:text-base leading-[30px]">
        {testimonials}
      </p>
      <div className="flex items-center gap-x-2 md:gap-x-4 md:mt-14 mt-7">
        <div className="md:w-[88px] md:h-[88px] w-[67.829px] h-[67.829px]">
          <img
            className="h-auto max-w-full bg-no-repeat rounded-2xl"
            src={imageUrl}
            alt="user"
          />
        </div>
        <div className="gap-x-2 md:gap-x-5">
          <p className="text-base font-bold text-black md:text-xl">{name}</p>
          <p className="text-[#5D5A88] text-sm md:text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
