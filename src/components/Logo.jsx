import React from "react";
import BPS from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <img src={BPS} alt="Logo" className="w-14 h-14 object-contain" /> {/* Menambahkan ukuran untuk gambar */}
      <h1 className="text-lg font-bold text-white max-w-96 italic">
        BADAN PUSAT STATISTIK <br />
        <span className="text-sxl">PROVINSI SUMATERA BARAT</span>
      </h1>
    </div>
  );
};

export default Logo;
