import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button"; // Import komponen Button
import { FaInfoCircle } from "react-icons/fa";

const ListPesertaMagang = () => {
  const daftarPesertaMagang = [
    {
      nama: "John Doe",
      institusi: "Universitas A",
      jurusan: "Teknik Informatika",
      status: "Aktif",
      keterangan: "Diproses",
      tglDaftar: "2024-01-01",
    },
    {
      nama: "Jane Doe",
      institusi: "Universitas B",
      jurusan: "Sistem Informasi",
      status: "Selesai",
      keterangan: "Diproses",
      tglDaftar: "2024-02-15",
    },
    {
      nama: "Alex Smith",
      institusi: "Universitas C",
      jurusan: "Manajemen",
      status: "Aktif",
      keterangan: "Diproses",
      tglDaftar: "2024-01-25",
    },
    {
      nama: "Sarah Johnson",
      institusi: "Universitas D",
      jurusan: "Ekonomi",
      status: "Selesai",
      keterangan: "Diproses",
      tglDaftar: "2024-03-10",
    },
    {
      nama: "Mike Brown",
      institusi: "Universitas E",
      jurusan: "Psikologi",
      status: "Aktif",
      keterangan: "Diproses",
      tglDaftar: "2024-01-05",
    },
    {
      nama: "Lucy White",
      institusi: "Universitas F",
      jurusan: "Ilmu Komunikasi",
      status: "Aktif",
      keterangan: "Diproses",
      tglDaftar: "2024-02-10",
    },
    {
      nama: "Luke Black",
      institusi: "Universitas G",
      jurusan: "Desain Grafis",
      status: "Aktif",
      keterangan: "Diproses",
      tglDaftar: "2024-01-30",
    },
    {
      nama: "Emma Green",
      institusi: "Universitas H",
      jurusan: "Hukum",
      status: "Aktif",
      keterangan: "Diproses",
      tglDaftar: "2024-03-01",
    },
    {
      nama: "Olivia Harris",
      institusi: "Universitas I",
      jurusan: "Teknik Sipil",
      status: "Selesai",
      keterangan: "Diproses",
      tglDaftar: "2024-01-12",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [sortedPesertaMagang, setSortedPesertaMagang] =
    useState(daftarPesertaMagang);

  const handleSort = (order) => {
    const sorted = [...sortedPesertaMagang].sort((a, b) => {
      if (order === "newest")
        return new Date(b.tglDaftar) - new Date(a.tglDaftar);
      if (order === "oldest")
        return new Date(a.tglDaftar) - new Date(b.tglDaftar);
      return 0;
    });
    setSortedPesertaMagang(sorted);
  };

  const handleApproval = (index) => {
    const updatedPesertaMagang = [...sortedPesertaMagang];
    updatedPesertaMagang[index].keterangan = "Diterbitkan";
    setSortedPesertaMagang(updatedPesertaMagang);
  };

  React.useEffect(() => {
    handleSort(sortOrder);
  }, [sortOrder]);

  const filteredPesertaMagang = sortedPesertaMagang.filter((peserta) =>
    peserta.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[250px]">
        <Navbar />
        <div className="p-[100px]">
          <h1 className="text-blue-premier text-3xl font-bold">
            List Peserta Magang
          </h1>
          <p className="text-sm text-gray-500">Semua Peserta Magang</p>
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
                <th className="p-4 border border-gray-300">Nama Peserta</th>
                <th className="p-4 border border-gray-300">Institusi</th>
                <th className="p-4 border border-gray-300">Jurusan</th>
                <th className="p-4 border border-gray-300">Status</th>
                <th className="p-4 border border-gray-300">Detail</th>
                <th className="p-4 border border-gray-300">Persetujuan</th>
                <th className="p-4 border border-gray-300">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {filteredPesertaMagang.map((peserta, index) => (
                <tr key={index} className="hover:bg-blue-100">
                  <td className="p-4 border border-gray-300">{peserta.nama}</td>
                  <td className="p-4 border border-gray-300">
                    {peserta.institusi}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {peserta.jurusan}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {peserta.status}
                  </td>
                  <td className="p-4 border border-gray-300 text-center">
                    <div className="flex justify-center items-center">
                      <FaInfoCircle className="text-blue-500 cursor-pointer" />
                    </div>
                  </td>
                  <td className="p-4 border border-gray-300 flex justify-center">
                    {peserta.keterangan === "Diproses" ? (
                      <Button onClick={() => handleApproval(index)}>
                        Setujui
                      </Button>
                    ) : (
                      <Button variant="success" disabled>
                        Disetujui
                      </Button>
                    )}
                  </td>

                  <td className="p-4 border border-gray-300">
                    {peserta.keterangan}
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

export default ListPesertaMagang;