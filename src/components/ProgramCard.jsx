import Img from '../assets/image/card1.png';
export default function ProgramCard() {
  return (
    <div className="items-center justify-center p-4 bg-white border shadow-md rounded-3xl">
      <div className="rounded-3xl">
        <img src={Img} alt="Card Image" />
      </div>
      <p className="pt-4 text-3xl font-bold text-center text-black">
        Pendidikan Unggul
      </p>
      <p className="text-[#676363] text-center font-normal text-lg pt-2 pb-4">
        Fokus pada peningkatan kualitas pendidikan dengan menyesuaikan
        kurikulum dan memastikan akses setara bagi semua.
      </p>
      <button className="w-full py-2.5 bg-[#ED1B24] text-white justify-center items-center px-4 rounded-[999px]">
        Selengkapnya
      </button>
    </div>
  )
}
