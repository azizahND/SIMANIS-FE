import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ButtonTutup from "../components/ButtonTutup"; // Import ButtonTutup
import Button from "../components/Button"; // Import Button
import { FaUpload, FaFileAlt } from "react-icons/fa";

const ArsipPesertaMagang = () => {
  const [arsipPesertaMagang, setArsipPesertaMagang] = useState([
    {
      nama: "John Doe",
      institusi: "Universitas A",
      jurusan: "Teknik Informatika",
      surat: [],
      status: "Tidak Ada",
    },
    {
      nama: "Jane Doe",
      institusi: "Universitas B",
      jurusan: "Sistem Informasi",
      surat: [{ namaSurat: "Surat Pengantar", file: "pengantar.pdf" }],
      status: "Belum Lengkap",
    },
    {
      nama: "Alex Smith",
      institusi: "Universitas C",
      jurusan: "Manajemen",
      surat: [
        { namaSurat: "Surat Pengantar", file: "pengantar.pdf" },
        { namaSurat: "Surat Balasan", file: "balasan.pdf" },
      ],
      status: "Lengkap",
    },
  ]);

  const [selectedPeserta, setSelectedPeserta] = useState(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [showRekapPopup, setShowRekapPopup] = useState(false);

  const handleUploadSurat = (pesertaIndex, namaSurat, file) => {
    const updatedArsip = [...arsipPesertaMagang];
    updatedArsip[pesertaIndex].surat.push({ namaSurat, file });

    // Update status
    updatedArsip[pesertaIndex].status =
      updatedArsip[pesertaIndex].surat.length === 2
        ? "Lengkap"
        : "Belum Lengkap";

    setArsipPesertaMagang(updatedArsip);
    setShowUploadPopup(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[250px]">
        <Navbar />
        <div className="p-[100px]">
          <h1 className="text-blue-premier text-3xl font-bold">
            Arsip Peserta Magang
          </h1>
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
                  <td className="p-2 border border-gray-300">
                    {peserta.institusi}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {peserta.jurusan}
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    <button
                      onClick={() => {
                        setSelectedPeserta(index);
                        setShowUploadPopup(true);
                      }}
                      className="text-blue-500"
                    >
                      <FaUpload size={20} />
                    </button>
                  </td>
                  <td className="p-2 border border-gray-300 text-center">
                    <button
                      onClick={() => {
                        setSelectedPeserta(index);
                        setShowRekapPopup(true);
                      }}
                      className="text-blue-500"
                    >
                      <FaFileAlt size={20} />
                    </button>
                  </td>
                  <td className="p-2 border border-gray-300">
                    {peserta.status}
                  </td>
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
                    <label className="block font-semibold mb-2">
                      Pilih Surat
                    </label>
                    <div className="flex items-center space-x-5">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="namaSurat"
                          value="Surat Pengantar"
                          required
                          className="mr-2"
                        />
                        Surat Pengantar
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="namaSurat"
                          value="Surat Balasan"
                          required
                          className="mr-2"
                        />
                        Surat Balasan
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block font-semibold mb-2">
                      File Surat
                    </label>
                    <input
                      type="file"
                      name="file"
                      required
                      className="border border-gray-300 p-2 w-full"
                    />
                  </div>
                  <div className="flex space-x-3 mt-5">
                    <Button label={"Simpan"} />
                    <ButtonTutup
                      onClick={() => setShowUploadPopup(false)}
                      className="bg-gray-300 text-black p-2 rounded"
                    >
                      Tutup
                    </ButtonTutup>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Rekap Surat Popup */}
          {showRekapPopup && (
            <div className="popup fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-3xl">
                <h2 className="text-xl font-bold mb-4 text-blue-premier">
                  Rekap Surat
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-premier text-white">
                        <th className="p-3 text-left border border-gray-300">
                          Nama Surat
                        </th>
                        <th className="p-3 text-left border border-gray-300">
                          File
                        </th>
                        <th className="p-3 text-left border border-gray-300">
                          Preview
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {arsipPesertaMagang[selectedPeserta].surat.map(
                        (surat, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } hover:bg-gray-200 transition`}
                          >
                            <td className="p-3 border border-gray-300">
                              {surat.namaSurat}
                            </td>
                            <td className="p-3 border border-gray-300">
                              <a
                                href={`/${surat.file}`}
                                download
                                className="text-blue-500 hover:underline"
                              >
                                {surat.file}
                              </a>
                            </td>
                            <td className="p-3 border border-gray-300">
                              <embed
                                src={`/${surat.file}`}
                                type="application/pdf"
                                width="300"
                                height="200"
                                className="border border-gray-300 rounded-lg"
                              />
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <ButtonTutup
                  onClick={() => setShowRekapPopup(false)}
                  className="mt-5"
                >
                  Tutup
                </ButtonTutup>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArsipPesertaMagang;
