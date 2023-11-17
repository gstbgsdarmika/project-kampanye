import ig from "../assets/image/igicon.png";
import fb from "../assets/image/fbicon.png";
import tiktok from "../assets/image/tiktokicon.png";
import yt from "../assets/image/yticon.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="flex justify-center self-center text-2xl whitespace-nowrap text-black font-bold text-center mb-2 sm:mb-0">
            Relawan <span className="text-[#ED1B24] ms-1">Agung Suyoga</span>
          </span>
          <ul className="flex flex-wrap justify-center items-center gap-4 py-4 md:py-0 sm:mb-0 text-sm font-medium text-gray-500 sm:text-center dark:text-gray-400">
            <li>
              <a href="#" className="mr-2 sm:mr-4 hover:underline md:mr-6">
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="mr-2 sm:mr-4 hover:underline md:mr-6"
              >
                Profil
              </a>
            </li>
            <li>
              <a
                href="#program"
                className="mr-2 sm:mr-4 hover:underline md:mr-6"
              >
                Program
              </a>
            </li>
            <li>
              <a href="#blog" className="mr-2 sm:mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">
                Galeri
              </a>
            </li>
          </ul>
          <div className="flex gap-4 justify-center py-4 sm:py-0 sm:mb-0">
            <a href="http://facebook.com/RelawanAgungSuyoga2" className="flex items-center"  target="_blank" rel="noreferrer">
              <img src={fb} className="h-8" alt="FB Logo" />
            </a>
            <a href="http://www.tiktok.com/@agungsuyogaa" className="flex items-center" target="_blank" rel="noreferrer">
              <img src={tiktok} className="h-8" alt="Tiktok Logo" />
            </a>
            <a href="https://www.youtube.com/@agungsuyoga" className="flex items-center" target="_blank" rel="noreferrer">
              <img src={yt} className="h-8" alt="Youtube Logo" />
            </a>
            <a href="https://instagram.com/relawanagungsuyoga?igshid=YzAwZjE1ZTI0Zg==" target="_blank" rel="noreferrer">
              <img src={ig} className="h-8" alt="IG Logo" />
            </a>
          </div>
        </div>
        <hr className="my-4 sm:my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Copyright © 2023 Relawan Agung Suyoga | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
