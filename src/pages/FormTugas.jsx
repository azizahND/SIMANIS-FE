import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const FormTugas = () => {
  const [judulTugas, setJudulTugas] = useState("");
  const [deskripsiTugas, setDeskripsiTugas] = useState("");
  const [deadline, setDeadline] = useState("");
  const [peserta, setPeserta] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    const tugas = {
      judulTugas,
      deskripsiTugas,
      deadline,
      peserta,
    };
    console.log("Tugas dibuat:", tugas);
    // Tambahkan logika untuk menyimpan tugas
  };

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Form Tugas Magang</h2>

            {/* Judul Tugas */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Judul Tugas</label>
              <Input
                type="text"
                placeholder="Masukkan judul tugas"
                value={judulTugas}
                onChange={(e) => setJudulTugas(e.target.value)}
              />
            </div>

            {/* Deskripsi Tugas */}
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

            {/* Deadline Tugas */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Deadline Tugas</label>
              <Input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-2">Pastikan deadline sesuai dengan rencana.</p>
            </div>

            {/* Pilih Peserta */}
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

            {/* Submit Button */}
            <Button
              type="submit"
              label="Buat Tugas"
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            />
          </form>
        </main>
      </div>
    </div>
  );
};

export default FormTugas;
