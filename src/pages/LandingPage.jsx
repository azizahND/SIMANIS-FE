// Landing.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import blue from "../assets/blue.jpg";
import infografis from "../assets/infografis.jpg";
import gradient from "../assets/gradient.jpg";


import bps from "../assets/bps.png";
import Intern from "../assets/intern.jpg";
import NavbarLanding from "../components/NavbarLanding";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ScrollButton from "../components/Scroll";
import { School, Earth, GraduationCap, Shield, BookText, BookUser, BookAudio} from "lucide-react";
import { Link} from "react-router-dom";

const Landing = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const homeSection = document.getElementById("home");
    const tujuanSection = document.getElementById("tujuan");
    const tujuanTop = tujuanSection?.getBoundingClientRect().top;

    setNavbarSolid(tujuanTop <= 0);

    const homeRect = homeSection?.getBoundingClientRect();
    setShowScrollButton(homeRect?.bottom <= 0);
  };

  useEffect(() => {
    const debouncedScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  return (
    <div className="bg-blue-50 ">
      {/* Navbar */}
      {/* <NavbarLanding
        className={`transition duration-300 ${
          navbarSolid ? "bg-blue-premier shadow-lg" : "bg-transparent"
        }`}
      /> */}
      

      <section
  id="home"
  className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center"
  style={{
    backgroundImage: `url(${blue})`,
  }}
>
  {/* Overlay Background */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Content */}
  <div className="relative z-10 text-center">
    <h1 className="text-7xl font-bold mb-4">Selamat Datang di <span className="text-oren font-sans">SIMANIS</span></h1>
    <p className="text-2xl mb-6">Langkah untuk Pengalaman Profesional</p>
    <div className="flex justify-center gap-5 mt-5 ">
      <Link to="/login">
        <Button className="font-bold" label="Login" variant="greenn" />
      </Link>
      <Link to="/registerKelompok">
        <Button label="Register" variant="orenn" className="font-bold" />
      </Link>
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
        <div className="max-w-[95rem] mx-auto grid md:grid-cols-2 p-20 gap-20 items-center">
          <img
            src={Intern}
            alt="Gambar BPS"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-2 rounded-lg  bg-transparant">
              <Shield className="h-12 w-12 text-blue-premier " />
              </div>
            
              <h2 className="text-5xl font-bold text-blue-premier ">TUJUAN</h2>
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
                <strong>Meningkatkan Keterampilan Analitik:</strong>
                Memperdalam kemampuan analisis data melalui perangkat lunak
                seperti SPSS, R, atau Python.
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
        <div className="bg-blue-premier bg-opacity-90">
          <div className="max-w-[95rem] mx-auto grid md:grid-cols-3 gap-10 p-20">
            <Card
              title="90"
              deskripsi="Institusi"
              textColor="text-blue-sky"
              Ikon={School}
            />
            <Card
              title="100"
              deskripsi="Bidang"
              textColor="text-green"
              Ikon={Earth}
            />
            <Card
              title="56"
              deskripsi="Peserta"
              textColor="text-oren"
              Ikon={GraduationCap}
            />
          </div>
        </div>
      </motion.section>

      {/* <motion.section id="simanis" >
        <div className="grid grid-cols-2 max-w-[95rem] mx-auto">
          <div className="">
            <img src={bps}/>
          </div>
          <div className="">
            <img src={gradient} className="w-full h-full"/>
          </div>
        </div>

      </motion.section> */}

      <motion.section id="panduan"
      className="bg-blue-50 flex items-center">
        <div className="grid grid-cols-2 max-w-[95rem] mx-auto p-20">
          <div className=" flex justify-center items-center">
            <img
            src={infografis} className="h-100 w-60 shadow-xl border-4 border-blue-900 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
          </div>
          <div className=" items-center space-y-6 text-lg ">
            <div className="flex mt-20">
            <BookText className="h-12 w-12 text-blue-premier mr-3" />
            <h1 className="text-3xl font-bold text-blue-premier ">PANDUAN PENGGUNAAN </h1>

            </div>
              <h3 className="flex text-lg items-center font-serif"><div className="relative backdrop-blur-md bg-blue-100 p-3 mr-2 rounded-md text-blue-premier border font-semibold  items-center "><BookUser/></div> Lihat Panduan Singkat – Ikuti langkah-langkah dasar untuk registrasi dan login.</h3>
            <h3 className="flex text-lg items-center font-serif"><div className="relative backdrop-blur-md bg-blue-100 p-3 mr-2 rounded-md text-blue-premier border font-semibold  items-center"><BookAudio/></div>Butuh Info Lebih Lengkap? – Akses guidebook resmi untuk detail penggunaan.</h3>
            <Button variant="greenn" label="Guide Book"/>
            <h3>Selamat menggunakan SIMANIS! 🚀</h3>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-white py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-[95rem] mx-auto text-center p-20">
          <h2 className="text-5xl font-bold text-blue-premier mb-20">
            Ambil Kesempatan dan Kendali Masa Depanmu Sekarang
          </h2>
          <div className="flex justify-center">
            <Button
              label="Daftar Sekarang"
              className="text-xl font-bold mb-5 text-white"
            />
          </div>
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
