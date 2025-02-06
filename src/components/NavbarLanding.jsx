import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, ubah state jadi true
      setIsScrolled(window.scrollY > 50);
    };

    // Tambahkan event listener
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Tujuan", href: "#tujuan" },
    { name: "Kontak", href: "#kontak" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-300   ${
        isScrolled
          ? "bg-gradient-to-r from-blue-600/90 to-blue-800/90 shadow-md" // Navbar berubah jadi biru saat di-scroll
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[85rem] mx-auto px-6 flex items-center justify-between py-3">
        {/* Logo BPS */}
        <Link
          to="/home"
          className="flex items-center gap-x-2 text-xl font-semibold text-white"
          aria-label="Brand - Badan Pusat Statistik"
        >
          <img
            src="src/assets/logo.png"
            alt="Logo Badan Pusat Statistik"
            className="w-15 h-12"
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
        <div className="flex items-center gap-5">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lg text-white hover:text-gray-400"
              aria-label={`Link ke ${item.name}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavbarLanding;
