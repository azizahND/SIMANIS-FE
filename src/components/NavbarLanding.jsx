import Button from "./Button";
import { Link } from "react-router-dom";

const NavbarLanding = ({ className = "" }) => {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Tujuan", href: "#tujuan" },
    { name: "Kontak", href: "#kontak" },
    { name: "Login", href: "/login" },

  ];

  return (
    <header
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gradient-to-r from-blue-600/90 to-blue-800/90 rounded-2xl md:rounded-3xl text-sm py-3 sticky top-0 z-20 ${className}`}
    >
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between w-[80%]">
        {/* Logo BPS */}
        <Link
          to="/home"
          className="flex items-center gap-x-2 text-xl font-semibold text-white focus:outline-none focus:opacity-80"
          aria-label="Brand - Badan Pusat Statistik"
        >
          <img
            src="src/assets/logo.png"
            alt="Logo Badan Pusat Statistik"
            className="w-12 h-12"
          />
          <div className="grid grid-rows-2 gap-1">
            <div className="text-xl font-sans italic font-bold leading-none">
              BADAN PUSAT STATISTIK
            </div>
            <div className="text-xl italic font-sans font-bold leading-none">
              PROVINSI SUMATERA BARAT
            </div>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-5 mt-5 sm:mt-0 sm:ps-5">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lg text-white hover:text-gray-400 focus:outline-none"
              aria-label={`Link ke ${item.name}`}
            >
              {item.name}
            </a>
          ))}

          {/* Tombol Login */}
          
        </div>
      </nav>
    </header>
  );
};

export default NavbarLanding;
