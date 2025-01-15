import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa"; // Import icon for detail and approval

const ListPesertaMagang = () => {
  const daftarPesertaMagang = [
    { nama: "John Doe", institusi: "Universitas A", jurusan: "Teknik Informatika", status: "Aktif", keterangan: "Diproses", tglDaftar: "2024-01-01" },
    { nama: "Jane Doe", institusi: "Universitas B", jurusan: "Sistem Informasi", status: "Selesai", keterangan: "Diproses", tglDaftar: "2024-02-15" },
    { nama: "Alex Smith", institusi: "Universitas C", jurusan: "Manajemen", status: "Aktif", keterangan: "Diproses", tglDaftar: "2024-01-10" },
    { nama: "Sarah Johnson", institusi: "Universitas D", jurusan: "Ekonomi", status: "Selesai", keterangan: "Diproses", tglDaftar: "2024-01-20" },
    { nama: "Mike Brown", institusi: "Universitas E", jurusan: "Psikologi", status: "Aktif", keterangan: "Diproses", tglDaftar: "2024-01-25" },
    { nama: "Lucy White", institusi: "Universitas F", jurusan: "Ilmu Komunikasi", status: "Selesai", keterangan: "Diproses", tglDaftar: "2024-02-05" },
    { nama: "Luke Black", institusi: "Universitas G", jurusan: "Desain Grafis", status: "Aktif", keterangan: "Diproses", tglDaftar: "2024-01-12" },
    { nama: "Emma Green", institusi: "Universitas H", jurusan: "Hukum", status: "Selesai", keterangan: "Diproses", tglDaftar: "2024-02-10" },
    { nama: "Olivia Harris", institusi: "Universitas I", jurusan: "Teknik Sipil", status: "Aktif", keterangan: "Diproses", tglDaftar: "2024-01-05" },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // State for search
  const [sortOrder, setSortOrder] = useState("newest"); // State for sorting
  const [sortedPesertaMagang, setSortedPesertaMagang] = useState(daftarPesertaMagang);

  // Function to handle search
  const filteredPesertaMagang = sortedPesertaMagang.filter((peserta) =>
    peserta.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    peserta.institusi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    peserta.jurusan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle sorting
  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    const sortedData = [...filteredPesertaMagang].sort((a, b) => {
      const dateA = new Date(a.tglDaftar);
      const dateB = new Date(b.tglDaftar);
      return order === "newest" ? dateB - dateA : dateA - dateB;
    });
    setSortedPesertaMagang(sortedData);
  };

  // Function to handle approval
  const handleApproval = (index) => {
    const updatedPesertaMagang = [...sortedPesertaMagang];
    updatedPesertaMagang[index].keterangan = "Diterbitkan"; // Change status to Diterbitkan after approval
    setSortedPesertaMagang(updatedPesertaMagang);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 ml-[250px]"> {/* Adjust right side to accommodate sidebar */}
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-[100px]">
          <h1 className="text-blue-premier text-3xl font-bold">List Peserta Magang</h1>
          <p className="text-sm text-gray-500">Semua Peserta Magang yang Sudah Disetujui</p>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Cari Peserta..."
            className="p-2 border border-gray-300 rounded-md w-full mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Sorting Dropdown */}
          <div className="mb-4">
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-premier text-white">
                <th className="p-2 border border-gray-300">Nama Peserta</th>
                <th className="p-2 border border-gray-300">Institusi</th>
                <th className="p-2 border border-gray-300">Jurusan</th>
                <th className="p-2 border border-gray-300">Status</th>
                <th className="p-2 border border-gray-300">Detail</th>
                <th className="p-2 border border-gray-300">Persetujuan</th>
                <th className="p-2 border border-gray-300">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {filteredPesertaMagang.map((peserta, index) => (
                <tr key={index} className="hover:bg-blue-100">
                  <td className="p-2 border border-gray-300">{peserta.nama}</td>
                  <td className="p-2 border border-gray-300">{peserta.institusi}</td>
                  <td className="p-2 border border-gray-300">{peserta.jurusan}</td>
                  <td className="p-2 border border-gray-300">{peserta.status}</td>
                  <td className="p-2 border border-gray-300">
                    <FaInfoCircle className="text-blue-500 cursor-pointer" />
                  </td>
                  <td className="p-2 border border-gray-300">
                    {peserta.keterangan === "Diproses" ? (
                      <button
                        onClick={() => handleApproval(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      >
                        Setujui
                      </button>
                    ) : (
                      <span className="text-green-500">Disetujui</span>
                    )}
                  </td>
                  <td className="p-2 border border-gray-300">{peserta.keterangan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListPesertaMagang;
