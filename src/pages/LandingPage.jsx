import Img from '../assets/image/bgProgram.png';
import AchievementCard from "../components/AchievementCard"
import ProgramCard from '../components/ProgramCard';
export default function LandingPage() {
  const programBg = {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <div>
      {/* Prestasi */}
      <div className="container w-4/5 mx-auto mt-10 md:w-5/6">
        <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
          PRESTASI
        </h1>
        <p className="text-black md:text-[44px] text-2xl font-bold mt-4 leading-10">
          Mengukir Jejak Prestasi yang Menginspirasi
        </p>
        <p className="mt-3 text-sm font-normal text-justify text-black md:text-lg">
          Dalam perjalanan hidup ini, prestasi bukan hanya sekadar pencapaian,
          tetapi juga kisah inspiratif yang membimbing langkah-langkah menuju
          keunggulan. Dari keberhasilan besar hingga pencapaian pribadi yang luar
          biasa, setiap prestasi adalah cerminan komitmen, kerja keras, dan tekad
          untuk meraih yang terbaik.
        </p>
        <div className="flex gap-5 mt-1 overscroll-auto">
          <AchievementCard />
        </div>
      </div>
      {/* Program */}
      <div className="container mx-auto mt-20 bg-no-repeat" style={programBg}>
        <div className="pt-20 pb-10 bg-white bg-opacity-50">
        <div className="flex justify-center">
          <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
            PROGRAM
          </h1>
        </div>
        <p className="text-center text-black md:text-[44px] text-xl font-bold mt-4">
          Menuju Denpasar yang Lebih Baik
        </p>
        <div className="container grid grid-cols-1 gap-8 mx-auto mt-10 mb-5 md:grid-cols-3 md:w-5/6">
          <ProgramCard />
        </div>
        </div>
      </div>
    </div>
  )
}
