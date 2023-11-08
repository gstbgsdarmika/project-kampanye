export default function TestimonialsCard({
  testimonials,
  imageUrl,
  name,
  subtitle,
}) {
  return (
    <div className="grid gap-2 p-4 bg-white border border-solid shadow-sm border-neutral-colors-color-600 grid-col-3 md:gap-3 rounded-2xl">
      <p className="text-[#676363] text-sm md:text-base leading-[30px]">
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
          <p className="text-[#676363] text-sm md:text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
