import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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
  const [showPopup, setShowPopup] = useState(false);

  const pesertaMagang = [
    "John Doe",
    "Jane Doe",
    "Alex Smith",
    "Sarah Johnson",
    "Mike Brown",
    "Lucy White",
    "Luke Black",
    "Emma Green",
    "Olivia Harris",
  ];

  const [rekapanTugas, setRekapanTugas] = useState([]);

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

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          {/* Header dengan Ikon Tambah */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Rekapan Tugas</h2>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>


{/* Tabel Rekapan Tugas */}
<div className="ml-16"> 
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-blue-premier text-white">
        <th className="p-4 border border-gray-300">No</th>
        <th className="p-4 border border-gray-300">Judul</th>
        <th className="p-4 border border-gray-300">Deadline</th>
        <th className="p-4 border border-gray-300">Peserta</th>
        <th className="p-4 border border-gray-300">Aksi</th>
      </tr>
    </thead>
    <tbody>
      {rekapanTugas.map((tugas, index) => (
        <tr
          key={index}
          className={`${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          } hover:bg-blue-100`}
        >
          <td className="border border-gray-300 p-4 text-sm">{index + 1}</td>
          <td className="border border-gray-300 p-4 text-sm">{tugas.judul}</td>
          <td className="border border-gray-300 p-4 text-sm">{tugas.deadline}</td>
          <td className="border border-gray-300 p-4 text-sm">{tugas.peserta.join(", ")}</td>
          <td className="border border-gray-300 p-4 text-sm">
            <button className="text-blue-500 hover:text-blue-700 font-medium">
              Detail
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



          {/* Modal untuk Form */}
          <Modal isOpen={showPopup} onClose={() => setShowPopup(false)}>
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Form Tugas Magang
              </h2>
              {/* Form Tugas */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Tugas
                </label>
                <Input
                  type="text"
                  placeholder="Masukkan judul tugas"
                  value={judulTugas}
                  onChange={(e) => setJudulTugas(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Tugas
                </label>
                <textarea
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
                  placeholder="Masukkan deskripsi tugas"
                  value={deskripsiTugas}
                  onChange={(e) => setDeskripsiTugas(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deadline Tugas
                </label>
                <Input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Peserta
                </label>
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
                        id={`peserta-${index}`}
                        checked={peserta.includes(nama)}
                        onChange={() => handleCheck(nama)}
                        className="mr-2"
                      />
                      <label htmlFor={`peserta-${index}`} className="text-sm">
                        {nama}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                label="Simpan Tugas"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              />
            </form>
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default FormTugas;
