import img from '../assets/image/prestasi.png';

export default function AchievementCard() {
  return (
    <div className="md:w-[559px] md:h-[410px] w-[300.581px] h-[220.462px] flex my-10 border border-neutral-colors-color-600 border-solid md:rounded-[20px] rounded-lg">
      <div className="flex-none overflow-hidden text-center bg-cover">
        <img className="md:w-[316px] md:h-[410px] w-[169.917px] h-[220.462px] rounded-tl-lg rounded-bl-lg md:rounded-tl-[20px] md:rounded-bl-[20px]" src={img} alt="Prestasi" />
      </div>
        <div className="flex items-center p-2 text-center">
          <div className="flex flex-col justify-center md:rounded-bl-[20px]">
            <p className="text-black md:text-[28px] font-bold text-base md:leading-[38px]">
              Juara 1 Bagus Klungkung 2015
            </p>
            <p className="mt-2 text-xs text-red-600 md:text-lg">
              Tingkat Kabupaten
            </p>
          </div>
        </div>
    </div>
  )
}
