import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button"; // Import komponen Button
import { FaUpload, FaFileAlt } from "react-icons/fa";

const ArsipPesertaMagang = () => {
  const [arsipPesertaMagang, setArsipPesertaMagang] = useState([
    { nama: "John Doe", institusi: "Universitas A", jurusan: "Teknik Informatika", surat: [], status: "Tidak Ada" },
    { nama: "Jane Doe", institusi: "Universitas B", jurusan: "Sistem Informasi", surat: [{ namaSurat: "Surat Pengantar", file: "pengantar.pdf" }], status: "Belum Lengkap" },
    { nama: "Alex Smith", institusi: "Universitas C", jurusan: "Manajemen", surat: [{ namaSurat: "Surat Pengantar", file: "pengantar.pdf" }, { namaSurat: "Surat Balasan", file: "balasan.pdf" }], status: "Lengkap" },
  ]);

  const [selectedPeserta, setSelectedPeserta] = useState(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [showRekapPopup, setShowRekapPopup] = useState(false);

  const handleUploadSurat = (pesertaIndex, namaSurat, file) => {
    const updatedArsip = [...arsipPesertaMagang];
    updatedArsip[pesertaIndex].surat.push({ namaSurat, file });

    // Update status
    updatedArsip[pesertaIndex].status =
      updatedArsip[pesertaIndex].surat.length === 2 ? "Lengkap" : "Belum Lengkap";

    setArsipPesertaMagang(updatedArsip);
    setShowUploadPopup(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[250px]">
        <Navbar />
        <div className="p-[100px]">
          <h1 className="text-blue-premier text-3xl font-bold">Arsip Peserta Magang</h1>
          <p className="text-sm text-gray-500">Arsip Surat Peserta Magang</p>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-premier text-white">
                <th className="p-2 border border-gray-300">Nama Peserta</th>
                <th className="p-2 border border-gray-300">Institusi</th>
                <th className="p-2 border border-gray-300">Jurusan</th>
                <th className="p-2 border border-gray-300">Tambah Surat</th>
                <th className="p-2 border border-gray-300">Rekap Surat</th>
                <th className="p-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {arsipPesertaMagang.map((peserta, index) => (
                <tr key={index} className="hover:bg-blue-100">
                  <td className="p-2 border border-gray-300">{peserta.nama}</td>
                  <td className="p-2 border border-gray-300">{peserta.institusi}</td>
                  <td className="p-2 border border-gray-300">{peserta.jurusan}</td>
                  <td className="p-2 border border-gray-300 text-center">
                    <Button
                      onClick={() => {
                        setSelectedPeserta(index);
                        setShowUploadPopup(true);
                      }}
                    >
                      <FaUpload className="text-blue-500" /> Tambah
                    </Button>
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    <Button
                      onClick={() => {
                        setSelectedPeserta(index);
                        setShowRekapPopup(true);
                      }}
                    >
                      <FaFileAlt className="text-blue-500" /> Rekap
                    </Button>
                  </td>
                  <td className="p-2 border border-gray-300">{peserta.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Upload Surat Popup */}
          {showUploadPopup && (
            <div className="popup fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-5 rounded-lg">
                <h2 className="text-xl font-bold">Upload Surat</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const namaSurat = e.target.namaSurat.value;
                    const file = e.target.file.files[0].name;
                    handleUploadSurat(selectedPeserta, namaSurat, file);
                  }}
                >
                  <div>
                    <label>Nama Surat</label>
                    <select name="namaSurat" required>
                      <option value="">Pilih Surat</option>
                      <option value="Surat Pengantar">Surat Pengantar</option>
                      <option value="Surat Balasan">Surat Balasan</option>
                    </select>
                  </div>
                  <div>
                    <label>File Surat</label>
                    <input type="file" name="file" required />
                  </div>
                  <div className="flex space-x-3 mt-3">
                    <Button type="submit" className="bg-blue-500 text-white">
                      Simpan
                    </Button>
                    <Button
                      onClick={() => setShowUploadPopup(false)}
                      className="bg-gray-500 text-white"
                    >
                      Tutup
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Rekap Surat Popup */}
          {showRekapPopup && (
            <div className="popup fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-5 rounded-lg">
                <h2 className="text-xl font-bold">Rekap Surat</h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 border border-gray-300">Nama Surat</th>
                      <th className="p-2 border border-gray-300">File</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arsipPesertaMagang[selectedPeserta].surat.map((surat, index) => (
                      <tr key={index}>
                        <td className="p-2 border border-gray-300">{surat.namaSurat}</td>
                        <td className="p-2 border border-gray-300">
                          <a href={`/${surat.file}`} download>
                            {surat.file}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Button onClick={() => setShowRekapPopup(false)} className="bg-gray-500 text-white mt-3">
                  Tutup
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArsipPesertaMagang;
