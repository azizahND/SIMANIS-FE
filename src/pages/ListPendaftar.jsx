import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa"; // Import icon dari react-icons

const ListPendaftar = () => {
  const daftarPendaftar = [
    { email: "john@example.com", nim: "12345", nama: "John Doe", institusi: "Universitas A", jurusan: "Teknik Informatika" },
    { email: "jane@example.com", nim: "67890", nama: "Jane Doe", institusi: "Universitas B", jurusan: "Sistem Informasi" },
    { email: "alex@example.com", nim: "1hhswudueucbjadcbjbsj1223", nama: "Alexc ksnlwclljwebvjcbwajckbawkbn sdvi bsdvbio sdboivoadvobon slv isdbvonckjsdvbjwsvbjbwbwvbiuwbuiwbuiauid hkcfhcfhvch vh cjbjcbwkjv Smith", institusi: "Universitas C", jurusan: "Manajemen" },
    { email: "sarah@example.com", nim: "44556", nama: "Sarah Johnson", institusi: "Universitas D", jurusan: "Ekonomi" },
    { email: "mike@example.com", nim: "78901", nama: "Mike Brown", institusi: "Universitas E", jurusan: "Psikologi" },
    { email: "lucy@example.com", nim: "23456", nama: "Lucy White", institusi: "Universitas F", jurusan: "Ilmu Komunikasi" },
    { email: "luke@example.com", nim: "34567", nama: "Luke Black", institusi: "Universitas G", jurusan: "Desain Grafis" },
    { email: "emma@example.com", nim: "45678", nama: "Emma Green", institusi: "Universitas H", jurusan: "Hukum" },
    { email: "olivia@example.com", nim: "56789", nama: "Olivia Harris", institusi: "Universitas I", jurusan: "Teknik Sipil" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 ml-[250px]"> {/* Geser ke kanan sesuai lebar sidebar */}
        {/* Navbar */}
        <Navbar />

        {/* Konten Halaman */}
        <div className="p-[100px]">
          <h1 className="text-blue-premier text-3xl font-bold">List Pendaftar</h1>
          {/* Menambahkan tulisan kecil di bawah judul */}
          <p className="text-sm text-gray-500">Semua Pendaftar</p>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-premier text-white"> {/* Menggunakan warna biru yang sama dengan List Pendaftar */}
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">NIM</th>
                <th className="p-2 border border-gray-300">Nama</th>
                <th className="p-2 border border-gray-300">Institusi</th>
                <th className="p-2 border border-gray-300">Jurusan</th>
                <th className="p-2 border border-gray-300">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {daftarPendaftar.map((pendaftar, index) => (
                <tr key={index} className="hover:bg-blue-100"> {/* Menambahkan efek hover pada baris tabel */}
                  <td className="p-2 border border-gray-300">{pendaftar.email}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.nim}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.nama}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.institusi}</td>
                  <td className="p-2 border border-gray-300">{pendaftar.jurusan}</td>
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
