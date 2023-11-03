export default function AchievementCard({ title, subtitle, imageUrl }) {
  return (
    <div className="grid grid-cols-5 shadow-[0px_8px_28px_0px_rgba(20,20,43,0.10)] md:gap-3 gap-2 border border-neutral-colors-color-600 border-solid md:rounded-[20px] rounded-lg">
      <div className="col-span-3">
        <img
          className="object-cover w-full h-full rounded-tl-lg rounded-bl-lg md:rounded-tl-[20px] md:rounded-bl-[20px]"
          src={imageUrl}
          alt="Prestasi"
        />
      </div>
      <div className="flex flex-col justify-center col-span-2 text-center md:p-4">
        <p className="text-[15.056px] font-bold text-left text-black md:text-2xl">
          {title}
        </p>
        <p className="mt-2 text-[9.679px] text-left text-red-600 md:text-lg">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
