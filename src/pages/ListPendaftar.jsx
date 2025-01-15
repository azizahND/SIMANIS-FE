import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa"; // Import icon from react-icons

const ListPendaftar = () => {
  const daftarPendaftar = [
    { email: "john@example.com", nim: "12345", nama: "John Doe", institusi: "Universitas A", jurusan: "Teknik Informatika", tglDaftar: "2023-01-15" },
    { email: "jane@example.com", nim: "67890", nama: "Jane Doe", institusi: "Universitas B", jurusan: "Sistem Informasi", tglDaftar: "2023-02-20" },
    { email: "alex@example.com", nim: "1hhswudueucbjadcbjbsj1223", nama: "Alexc Smith", institusi: "Universitas C", jurusan: "Manajemen", tglDaftar: "2023-01-25" },
    { email: "sarah@example.com", nim: "44556", nama: "Sarah Johnson", institusi: "Universitas D", jurusan: "Ekonomi", tglDaftar: "2023-03-10" },
    { email: "mike@example.com", nim: "78901", nama: "Mike Brown", institusi: "Universitas E", jurusan: "Psikologi", tglDaftar: "2023-01-05" },
    { email: "lucy@example.com", nim: "23456", nama: "Lucy White", institusi: "Universitas F", jurusan: "Ilmu Komunikasi", tglDaftar: "2023-02-10" },
    { email: "luke@example.com", nim: "34567", nama: "Luke Black", institusi: "Universitas G", jurusan: "Desain Grafis", tglDaftar: "2023-01-30" },
    { email: "emma@example.com", nim: "45678", nama: "Emma Green", institusi: "Universitas H", jurusan: "Hukum", tglDaftar: "2023-03-01" },
    { email: "olivia@example.com", nim: "56789", nama: "Olivia Harris", institusi: "Universitas I", jurusan: "Teknik Sipil", tglDaftar: "2023-01-12" },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // State for search
  const [sortOrder, setSortOrder] = useState("newest"); // State for sorting

  // Function to handle search
  const filteredPendaftar = daftarPendaftar.filter((pendaftar) =>
    pendaftar.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pendaftar.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pendaftar.jurusan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle sorting
  const sortedPendaftar = filteredPendaftar.sort((a, b) => {
    const dateA = new Date(a.tglDaftar);
    const dateB = new Date(b.tglDaftar);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 ml-[250px]"> {/* Adjust right side to accommodate sidebar */}
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-[100px]">
          <h1 className="text-blue-premier text-3xl font-bold">List Pendaftar</h1>
          <p className="text-sm text-gray-500">Semua Pendaftar</p>

          {/* Search Section */}
          <div className="my-4 flex items-center justify-center space-x-4">
            <input
              type="text"
              placeholder="Cari berdasarkan Nama, Email, atau Jurusan"
              className="p-3 w-full max-w-lg border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Sorting Dropdown on the Right */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-3 border border-gray-300 rounded-md"
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-premier text-white">
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">NIM</th>
                <th className="p-2 border border-gray-300">Nama</th>
                <th className="p-2 border border-gray-300">Institusi</th>
                <th className="p-2 border border-gray-300">Jurusan</th>
                <th className="p-2 border border-gray-300">Tanggal Pendaftaran</th>
                <th className="p-2 border border-gray-300">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {sortedPendaftar.map((pendaftar, index) => (
                <tr key={index} className="hover:bg-blue-100">
                  <td className="p-2 border border-gray-300">{pendaftar.email}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.nim}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.nama}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.institusi}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.jurusan}</td>
                  <td className="p-2 border border-gray-300">{new Date(pendaftar.tglDaftar).toLocaleDateString()}</td>
                  <td className="p-2 border border-gray-300">
                    <div className="flex justify-center space-x-4">
                      <button className="hover:text-green-500">
                        <FaCheckCircle className="text-green" />
                      </button>
                      <button className="hover:text-red-600">
                        <FaTimesCircle className="text-red-500" />
                      </button>
                      <button className="hover:text-gray-600">
                        <FaTrash className="text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListPendaftar;
