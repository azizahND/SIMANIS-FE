import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <img src="src/assets/logo.png" alt="Logo" />
      <h1 className="text-xl font-bold text-white max-w-96">
        BADAN PUSAT STATISTIK <br />
        <span className="text-sxl">PROVINSI SUMATERA BARAT</span>
        </h1>

    </div>
  );
};

export default Logo;
