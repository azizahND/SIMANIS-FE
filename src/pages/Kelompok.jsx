import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa";

const Kelompok = () => {
  const daftarPendaftar = [
    { kelompok: "1-Universitas Andalas", ketua: "John Doe", suratpengantar: "pengantar.pdf", institusi: "Universitas A", suratBalasan: "pengantar.pdf", tanggalDaftar: "2025-01-25T10:00:00Z" },
    { kelompok: "2-Universitas B", ketua: "Jane Smith", suratpengantar: "pengantar2.pdf", institusi: "Universitas B", suratBalasan: "balasan2.pdf", tanggalDaftar: "2025-01-26T12:00:00Z" },
    // Tambahkan data lain dengan tanggalDaftar
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredPendaftar = daftarPendaftar.filter((pendaftar) =>
    pendaftar.suratpengantar.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pendaftar.kelompok.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pendaftar.suratBalasan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPendaftar = filteredPendaftar.sort((a, b) => {
    const dateA = new Date(a.tanggalDaftar);
    const dateB = new Date(b.tanggalDaftar);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="flex shadow max-w-[95rem] mx-auto">
      <Sidebar />
      <div className="flex-1 ml-[250px] h-screen">
        <Navbar />
        <div className="p-[100px]">
          {/* Pembungkus konten */}
          <div className="shadow-lg p-6 bg-white rounded-md mt-10">
            <h1 className="text-blue-premier text-3xl font-bold">Daftar Kelompok</h1>
            <p className="text-sm text-gray-500">Semua Kelompok</p>

            {/* Search Section */}
            <div className="my-4 flex items-center justify-center space-x-4">
              <Input
                type="text"
                placeholder="Cari berdasarkan Kelompok"
                className="p-3 w-full max-w-lg border border-blue-premier rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
             <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="p-3 border bg-green border-gray-300 text-white font-medium rounded-md"
              >
                <option value="newest" className="text-black bg-white">Terbaru</option>
                <option value="oldest" className="text-black bg-white">Terlama</option>
             </select>

            </div>

            {/* Tabel */}
            <table className="w-full border-collapse text-center mt-10">
              <thead>
                <tr className="bg-blue-premier text-white">
                  <th className="p-2 border border-gray-300">No</th>
                  <th className="p-2 border border-gray-300">Kelompok</th>
                  <th className="p-2 border border-gray-300">Ketua</th>
                  <th className="p-2 border border-gray-300">Institusi</th>
                  <th className="p-2 border border-gray-300">Surat Pengantar</th>
                  <th className="p-2 border border-gray-300">Surat Balasan</th>
                </tr>
              </thead>
              <tbody>
                {sortedPendaftar.map((pendaftar, index) => (
                  <tr key={index} className="hover:bg-blue-50 ">
                    <td className="border border-gray-300 p-4 text-sm">{index + 1}</td>
                    <td className="p-2 border border-gray-300">{pendaftar.kelompok}</td>
                    
                    <td className="p-2 border border-gray-300">{pendaftar.ketua}</td>
                    <td className="p-2 border border-gray-300">{pendaftar.institusi}</td>
                    <td className="p-2 border border-gray-300">{pendaftar.suratpengantar}</td>

                    <td className="p-2 border border-gray-300">{pendaftar.suratBalasan}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelompok;
