import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Layanan", href: "#layanan" },
    { name: "Tujuan", href: "#tujuan" },
    { name: "Kontak", href: "#kontak" },
    { name: "Login", href: "/login" },
  ];

  // Fungsi untuk smooth scroll
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Mencegah efek lompat langsung
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-600/90 to-blue-800/90 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[85rem] mx-auto px-6 flex items-center justify-between py-3">
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
            item.href.startsWith("#") ? (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-xl text-white hover:font-bold cursor-pointer"
                aria-label={`Link ke ${item.name}`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                to={item.href}
                className="text-xl text-white hover:font-bold"
                aria-label={`Link ke ${item.name}`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavbarLanding;
