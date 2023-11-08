import React from "react";
import logo from "../assets/logo.svg";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center justify-center md:justify-start font-semibold text-black border-b-0 text-lg hover:border-b-2 hover:border-[#ED1B24] transition-all"
        >
          Beranda
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#profile"
          className="flex items-center justify-center md:justify-start  font-semibold text-black border-b-0 text-lg hover:border-b-2 hover:border-[#ED1B24] transition-all"
        >
          Profil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#program"
          className="flex items-center justify-center md:justify-start  font-semibold text-black border-b-0 text-lg hover:border-b-2 hover:border-[#ED1B24] transition-all"
        >
          Program
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#blog"
          className="flex items-center justify-center md:justify-start font-semibold text-black border-b-0 text-lg hover:border-b-2 hover:border-[#ED1B24] transition-all"
        >
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#gallery"
          className="flex items-center justify-center md:justify-start font-semibold text-black border-b-0 text-lg hover:border-b-2 hover:border-[#ED1B24] transition-all"
        >
          Galeri
        </a>
      </Typography>
    </ul>
  );
}

export function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="fixed inset-x-0 top-0 z-50 px-5 py-3 mx-auto bg-white md:px-20 rounded-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center md:gap-3">
          <img src={logo} alt="Logo PDI Perjuangan" />
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 text-black font-extrabold text-base md:text-2xl"
          >
            Relawan <span className="text-[#ED1B24]">Agung Suyoga</span>
          </Typography>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="flex items-center w-8 h-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-8 h-8 text-black" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-8 h-8 text-black" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
