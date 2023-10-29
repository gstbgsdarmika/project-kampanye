export default function AchievementCard({ title, subtitle, imageUrl }) {
  return (
    <div className="flex my-10 border border-neutral-colors-color-600 border-solid md:rounded-[20px] rounded-lg">
      <div className="flex-none overflow-hidden text-center bg-cover">
        <img
          className="rounded-tl-lg rounded-bl-lg md:rounded-tl-[20px] md:rounded-bl-[20px]"
          src={imageUrl}
          alt="Prestasi"
        />
      </div>
      <div className="flex items-center p-4 text-center">
        <div className="flex flex-col md:rounded-bl-[20px]">
          <p className="text-base font-bold text-left text-black md:text-2xl">
            {title}
          </p>
          <p className="mt-2 text-xs text-left text-red-600 md:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
