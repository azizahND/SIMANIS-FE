// Landing.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import blue from "../assets/blue.jpg";
import infografis from "../assets/infografis.jpg";
import gradient from "../assets/gradient.jpg";
import intern7 from "../assets/intern7.jpg";
import intern8 from "../assets/intern8.jpg";
import intern9 from "../assets/intern9.jpg";
import intern10 from "../assets/intern10.jpg";
import intern11 from "../assets/intern11.jpg";
import intern12 from "../assets/intern12.jpg";



import Carrousel from "../components/Carrousel";
import GroupCard from "../components/GroupCard";


import bps from "../assets/bps.png";
import Intern from "../assets/intern.jpg";
import NavbarLanding from "../components/NavbarLanding";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ScrollButton from "../components/Scroll";
import {
  School,
  Earth,
  GraduationCap,
  Shield,
  BookText,
  BookUser,
  BookAudio,
} from "lucide-react";
import { Link } from "react-router-dom";

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

  const images = [intern8, intern10, intern9,  intern12];

  return (
    <div className="bg-blue-50 ">
      {/* Navbar */}
      <NavbarLanding
        className={`transition duration-300 ${
          navbarSolid ? "bg-blue-premier shadow-lg" : "bg-transparent"
        }`}
      />

      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${intern7})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="flex justify-start grid grid-cols-2 pl-12 max-w-[95rem]">
          <div className=" relative z-10 text-start  pr-20 text-wrap">
            <h1 className="text-7xl font-bold mb-4 ">
              Selamat Datang di{" "}
              <span className="text-green font-sans">SIMANIS</span>
            </h1>
            <p className="text-xl mt-10 ">
              Sistem Pengelolaan Magang BPS Sumbar{" "}
              <span className="text-green font-medium">(SIMANIS)</span> adalah
              platform digital untuk mengelola data magang, pembagian unit
              kerja, pemantauan peserta, dan penerbitan sertifikat secara
              efisien dan transparan.
            </p>
            <div className="flex justify-start gap-5 mt-10 ">
              <Link to="/login">
                <Button className="font-bold" label="Login" variant="blue" />
              </Link>
              <Link to="/registerKelompok">
                <Button label="Register" variant="oren" className="font-bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tujuan Section */}
      <motion.section
        id="tujuan"
       className="py-20 bg-gradient-to-b from-blue-100 via-blue-0 to-white"

        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-[95rem] mx-auto grid md:grid-cols-2 p-20 gap-20 items-center ">
         
          <div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-2 rounded-lg border-2 border-blue-premier">
                <Shield className="h-12 w-12 text-blue-premier " />
              </div>

              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent bg-white text-shadow-lg ">TUJUAN</h2>
            </div>
            <div className="mt-10 space-y-6 text-lg font-serif">
      <div className="flex flex-col gap-2">
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <strong className="">Mengaplikasikan Teori ke Praktik</strong>
        </div>
        <p className="text-justify px-4">
          Magang memberikan kesempatan untuk mengaplikasikan pengetahuan yang diperoleh di bangku kuliah ke dalam situasi dunia kerja yang nyata, memperdalam pemahaman materi yang telah dipelajari
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <strong>Meningkatkan Keterampilan Kerja</strong>
        </div>
        <p className="text-justify px-4">
          Melalui pengalaman langsung, peserta magang dapat mengasah keterampilan teknis dan non-teknis seperti komunikasi, kerja tim, dan problem solving yang sangat dibutuhkan dalam dunia profesional
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <strong>Memperluas Jaringan Profesional</strong>
        </div>
        <p className="text-justify px-4">
          Magang memberi kesempatan untuk berinteraksi dengan profesional di industri terkait, yang bisa membuka peluang untuk karier di masa depan
        </p>
      </div>
    </div>
          </div>
          <div className="relative p-8 ">
            <div className="absolute top-0 bottom-0  right-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 opacity-100 rounded-xl" style={{ width: '70%', height: '100%' }}></div>
            <div className="z-10">
              <Carrousel images={images} />
            </div>
          </div>


        </div>
      </motion.section>

      <motion.section className="bg-gradient-to-r from-blue-600/90 to-blue-800/90 flex justify-center gap-0 py-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-6xl">
    <GroupCard judul="Institusi" jumlah={90} Ikon={School} jumlahColor="text-white" />
    <GroupCard judul="Bidang" jumlah={120} Ikon={Earth} jumlahColor="text-white" />
    <GroupCard judul="Peserta" jumlah={75} Ikon={GraduationCap} jumlahColor="text-white  " />
  </div>
</motion.section>



      {/* Statistik Section */}
      {/* <motion.section
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
      </motion.section> */}

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

      {/* <motion.section id="panduan" className="bg-blue-50 flex items-center">
        <div className="grid grid-cols-2 max-w-[95rem] mx-auto p-20">
          <div className=" flex justify-center items-center">
            <img
              src={infografis}
              className="h-100 w-60 shadow-xl border-4 border-blue-900 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            />
          </div>
          <div className=" items-center space-y-6 text-lg ">
            <div className="flex mt-20">
              <BookText className="h-12 w-12 text-blue-premier mr-3" />
              <h1 className="text-3xl font-bold text-blue-premier ">
                PANDUAN PENGGUNAAN{" "}
              </h1>
            </div>
            <h3 className="flex text-lg items-center font-serif">
              <div className="relative backdrop-blur-md bg-blue-100 p-3 mr-2 rounded-md text-blue-premier border font-semibold  items-center ">
                <BookUser />
              </div>{" "}
              Lihat Panduan Singkat – Ikuti langkah-langkah dasar untuk
              registrasi dan login.
            </h3>
            <h3 className="flex text-lg items-center font-serif">
              <div className="relative backdrop-blur-md bg-blue-100 p-3 mr-2 rounded-md text-blue-premier border font-semibold  items-center">
                <BookAudio />
              </div>
              Butuh Info Lebih Lengkap? – Akses guidebook resmi untuk detail
              penggunaan.
            </h3>
            <Button variant="greenn" label="Guide Book" />
            <h3>Selamat menggunakan SIMANIS! 🚀</h3>
          </div>
        </div>
      </motion.section> */}

      {/* Call to Action Section */}
      <motion.section
        className="bg-white py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-[95rem] mx-auto text-center p-20">
        <div className="text-center">
      <h2 className="text-5xl font-bold text-blue-premier text-shadow-lg">
        Magang di BPS Sumbar bareng{" "}
        <span className="text-green font-bold">SIMANIS</span>
      </h2>
      <h2 className="text-5xl font-bold text-blue-premier text-shadow-lg flex justify-center items-center gap-2 mt-4">
        Siapkan dirimu sekarang!
        <motion.span
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          🚀
        </motion.span>
      </h2>
    </div>
          <div className="flex justify-center mt-20">
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
