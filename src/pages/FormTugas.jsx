import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Plus, Pencil, Trash2 } from 'lucide-react';

// Komponen Modal
const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

const FormTugas = () => {
  const [judulTugas, setJudulTugas] = useState("");
  const [deskripsiTugas, setDeskripsiTugas] = useState("");
  const [deadline, setDeadline] = useState("");
  const [peserta, setPeserta] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false); // Modal visibility state
  const [sortOrder, setSortOrder] = useState("newest");
  const [rekapanTugas, setRekapanTugas] = useState([
    {
      judul: "Tugas Magang 1",
      deskripsi: "Deskripsi tugas magang pertama.",
      deadline: "2025-02-28",
      peserta: ["John Doe", "Jane Doe"],
    },
    {
      judul: "Tugas Magang 2",
      deskripsi: "Deskripsi tugas magang kedua.",
      deadline: "2025-03-15",
      peserta: ["Alex Smith", "Sarah Johnson"],
    },
  ]);

  const pesertaMagang = [
    "John Doe",
    "Jane Doe",
    "Alex Smith",
    "Sarah Johnson",
    
  ];

  const filteredPeserta = pesertaMagang.filter((nama) =>
    nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheck = (nama) => {
    if (peserta.includes(nama)) {
      setPeserta(peserta.filter((item) => item !== nama));
    } else {
      setPeserta([...peserta, nama]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tugasBaru = {
      judul: judulTugas,
      deskripsi: deskripsiTugas,
      deadline,
      peserta,
    };
    setRekapanTugas([...rekapanTugas, tugasBaru]);
    setShowPopup(false);
    setJudulTugas("");
    setDeskripsiTugas("");
    setDeadline("");
    setPeserta([]);
  };

  const handleSort = (order) => {
    const sorted = [...rekapanTugas].sort((a, b) => {
      if (order === "newest")
        return new Date(b.deadline) - new Date(a.deadline);
      if (order === "oldest")
        return new Date(a.deadline) - new Date(b.deadline);
      return 0;
    });
    setRekapanTugas(sorted);
  };

  return (
    <div className="flex shadow max-w-[95rem] mx-auto">
      <Sidebar />
      <div className="flex-1 ml-[250px] mx-auto h-screen">
        <Navbar />
        <main className="p-[100px]">
          <div className="shadow-lg p-6 bg-white rounded-md mt-10">
            <h2 className="text-blue-premier text-3xl font-bold">Rekapan Tugas</h2>
            <p className="text-sm text-gray-500">Semua Peserta Magang</p>
            {/* Search Section */}
            <div className="my-4 flex items-center justify-center space-x-4">
              <Input
                type="text"
                placeholder="Cari berdasarkan Nama, Email, atau Jurusan"
                className=" p-3 w-full max-w-lg border border-blue-premier rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {/* Sorting Dropdown */}
              <select
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  handleSort(e.target.value);
                }}
                className="p-3 border bg-green border-gray-300 text-white font-medium rounded-md"
              >
                <option value="newest" className="text-black bg-white">
                  Terbaru
                </option>
                <option value="oldest" className="text-black bg-white">
                  Terlama
                </option>
              </select>

              {/* Button untuk membuka modal */}
              <Button
                label={"Tugas"}
                variant="blue"
                ikon={<Plus />}
                onClick={() => setShowPopup(true)} // Menampilkan modal saat tombol ditekan
              />
            </div>

            {/* Container untuk Tabel */}
            <table className="w-full border-collapse text-center mt-10">
              <thead>
                <tr className="bg-blue-premier text-white border-lg">
                  <th className="p-2 border border-gray-300">No</th>
                  <th className="p-2 border border-gray-300">Tugas</th>
                  <th className="p-2 border border-gray-300">Deadline</th>
                  <th className="p-2 border border-gray-300">Peserta</th>
                  <th className="p-2 border border-gray-300">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {rekapanTugas.map((tugas, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50`}
                  >
                    <td className="border border-gray-300 p-2 text-sm">{index + 1}</td>
                    <td className="border border-gray-300 p-2 text-sm">{tugas.judul}</td>
                    <td className="border border-gray-300 p-2 text-sm">{tugas.deadline}</td>
                    <td className="border border-gray-300 p-2 text-sm">
                      {tugas.peserta.join(", ")}
                    </td>
                    <td className="border border-gray-300 p-2 flex items-center justify-center space-x-4">
                     {/* <Button
                     className="text-blue-500 hover:underline focus:outline-none"
                     ikon={<Pencil/>}
                     variant="yellow"
                     /> */}
                     <div className="p-2 rounded-lg bg-white shadow-lg">
                        <Pencil className="text-yellow-600" />
                     </div>
                     <div className="p-2 rounded-lg bg-white shadow-lg">
                        <Trash2 className="text-red-600"/>
                     </div>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal untuk Form */}
          <Modal isOpen={showPopup} onClose={() => setShowPopup(false)}>
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Form Tugas Magang</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Judul Tugas</label>
                <Input
                  type="text"
                  placeholder="Masukkan judul tugas"
                  value={judulTugas}
                  onChange={(e) => setJudulTugas(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Tugas</label>
                <textarea
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
                  placeholder="Masukkan deskripsi tugas"
                  value={deskripsiTugas}
                  onChange={(e) => setDeskripsiTugas(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Deadline Tugas</label>
                <Input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Peserta</label>
                <Input
                  placeholder="Cari peserta..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-md p-2 mt-2">
                  {filteredPeserta.map((nama, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        checked={peserta.includes(nama)}
                        onChange={() => handleCheck(nama)}
                        className="mr-2"
                      />
                      <span>{nama}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <Button type="submit" label="Simpan Tugas" variant="green" />
              </div>
            </form>
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default FormTugas;
