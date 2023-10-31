import ig from "../assets/image/igicon.png";
import fb from "../assets/image/fbicon.png";
import tiktok from "../assets/image/tiktokicon.png";
import yt from "../assets/image/yticon.png";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-2xl whitespace-nowrap text-black font-bold">Relawan <span className="text-[#ED1B24]">Agung Suyoga</span></span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Beranda</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Profil</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Program</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Galeri</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <a href="#" className="flex items-center mb-4 sm:mb-0">
                            <img src={fb} className="h-8" alt="FB Logo" />
                        </a>
                        <a href="#" className="flex items-center mb-4 sm:mb-0">
                            <img src={tiktok} className="h-8" alt="Tiktok Logo" />
                        </a>
                        <a href="#" className="flex items-center mb-4 sm:mb-0">
                            <img src={yt} className="h-8" alt="Youtube Logo" />
                        </a>
                        <a href="#" className="mb-4 sm:mb-0">
                            <img src={ig} className="h-8" alt="IG Logo" />
                        </a>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023 Relawan Agung Suyoga | All Rights Reserved </span>
            </div>
        </footer>
    );
  };
  
  export default Footer;
  