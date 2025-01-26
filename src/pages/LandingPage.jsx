import React, { useEffect, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { motion } from "framer-motion";
import bps from "../assets/bps.png";
import Intern from "../assets/intern.jpg";
import NavbarLanding from "../components/NavbarLanding";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ScrollButton from "../components/Scroll";
import { School, Earth, GraduationCap, Shield } from "lucide-react";
import Stat from "../components/Stat";
import Carrousel from "../components/Carrousel";
import wave from "../assets/wave.svg";

const Landing = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const vantaRef = React.useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x91753,
        });
        setVantaEffect(effect);
      } catch (error) {
        console.error("Error initializing Vanta:", error);
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const homeRect = homeSection.getBoundingClientRect();
      if (homeRect.bottom <= 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-blue-50">
      <NavbarLanding />

      {/* Home Section */}
      <section
        id="home"
        ref={vantaRef}
        className="relative w-full h-screen flex items-center justify-center text-white"
      >
        <div className="z-5 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Intern Platform
          </h1>
          <p className="text-lg mb-6">
            Your gateway to professional experience
          </p>
          <Button
            label="Get Started"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          />
        </div>

        {/* Stat div yang menimpa */}
        <div className="absolute bottom-1 pt-4 bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[70rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto rounded-lg shadow-lg z-10">
          <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 justify-items-center">
            <div>
              <Stat jumlah={100} label={"Institusi"} warna="text-blue-sky" />
            </div>
            <div>
              <Stat jumlah={100} label={"Bidang"} warna="text-green" />
            </div>
            <div>
              <Stat jumlah={100} label={"Peserta"} warna="text-oren" />
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan Section */}
      <motion.section
        id="tujuan"
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-[65rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto rounded-lg shadow-lg">
          <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 justify-items-center">
            <div>
              <Stat jumlah={100} label={"Institusi"} warna="text-blue-sky" />
            </div>
            <div>
              <Stat jumlah={100} label={"Bidang"} warna="text-green" />
            </div>
            <div>
              <Stat jumlah={100} label={"Peserta"} warna="text-oren" />
            </div>
          </div>
        </div>

        <div className="max-w-[95rem] mx-auto grid md:grid-cols-2 p-20 gap-20 items-center">
          <img
            src={Intern}
            alt="Gambar BPS"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <div className="flex items-center gap-4">
              <Shield className="h-12 w-12 text-blue-premier text-shadow-lg" />
              <h2 className="text-5xl font-bold text-blue-premier text-shadow-lg">TUJUAN</h2>
            </div>
            <ul className="mt-10 space-y-6 text-lg font-serif list-disc list-inside">
              <li>
                <strong>Mengembangkan Kompetensi Statistik:</strong> Memahami
                proses pengumpulan, pengolahan, analisis, dan penyajian data
                statistik resmi.
              </li>
              <li>
                <strong>Penerapan Teori ke Praktik:</strong> Menerapkan teori
                yang telah dipelajari di perkuliahan dalam kegiatan nyata.
              </li>
              <li>
                <strong>Meningkatkan Keterampilan Analitik:</strong> Memperdalam
                kemampuan analisis data melalui perangkat lunak seperti SPSS, R,
                atau Python.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Statistik Section */}
      <motion.section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bps})` }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="bg-blue-premier bg-opacity-90 ">
          <div className="max-w-[95rem] mx-auto grid md:grid-cols-3 gap-10 p-20">
            <Card title="90" deskripsi="Institusi" textColor="text-blue-sky" Ikon={School} />
            <Card title="100" deskripsi="Bidang" textColor="text-green" Ikon={Earth} />
            <Card title="56" deskripsi="Peserta" textColor="text-oren" Ikon={GraduationCap} />
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-white py-20 relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-[95rem] mx-auto text-center p-20">
          <h2 className="text-5xl font-bold text-blue-premier mb-20 text-shadow-lg">
            Ambil Kesempatan dan Kendali Masa Depanmu Sekarang
          </h2>
          <Button label="Daftar Sekarang" className="text-xl font-bold mb-5" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[95rem] flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#00255C"
              fillOpacity="1"
              d="M0,32L0,32L288,32L288,64L576,64L576,96L864,96L864,16L1152,16L1152,48L1440,48L1440,120L1152,120L1152,120L864,120L864,120L576,120L576,120L288,120L288,120L0,120L0,120Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Kontak Section */}
      <section id="kontak">
        <Footer />
      </section>

      {showScrollButton && <ScrollButton />}
    </div>
  );
};

export default Landing;
