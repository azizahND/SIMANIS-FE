import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const BiodataPage = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    namaPanggilan: "",
    tempatTanggalLahir: "",
    anakKe: "",
    asalSekolah: "",
    jurusan: "",
    ipk: "",
    namaIbu: "",
    pekerjaanIbu: "",
    namaAyah: "",
    pekerjaanAyah: "",
    agama: "",
    nomorHp: "",
    alamatRumah: "",
    alamatSekolah: "",
    riwayatPendidikanSD: "",
    tahunLulusSD: "",
    tempatSD: "",
    alasanMagang: "",
    jadwalMagang: "",
    keterampilan: "",
    unitMagang: "",
  });

  const [isDataCorrect, setIsDataCorrect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsDataCorrect(e.target.checked);
  };

  const handleSubmit = () => {
    console.log("Data yang dikirim: ", formData);
    alert("Data biodata berhasil disimpan!");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <div className="p-8 flex justify-center mt-8">
          <div className="max-w-4xl w-full p-8 shadow-lg rounded-lg bg-white">
            <h1 className="text-center text-blue-premier text-4xl mb-8">Formulir Biodata</h1>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <label>Nama Lengkap</label>
              <Input
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
              />
              <label>Nama Panggilan</label>
              <Input
                name="namaPanggilan"
                value={formData.namaPanggilan}
                onChange={handleChange}
                placeholder="Masukkan nama panggilan"
              />
              <label>Tempat/Tanggal Lahir</label>
              <Input
                name="tempatTanggalLahir"
                value={formData.tempatTanggalLahir}
                onChange={handleChange}
                placeholder="Contoh: Padang, 29 Februari 2004"
              />
              <label>Anak ke/dari bersaudara</label>
              <Input
                name="anakKe"
                value={formData.anakKe}
                onChange={handleChange}
                placeholder="Contoh: 2 dari 3 bersaudara"
              />
              <label>Asal Sekolah/Universitas</label>
              <Input
                name="asalSekolah"
                value={formData.asalSekolah}
                onChange={handleChange}
                placeholder="Masukkan asal sekolah/universitas"
              />
              <label>Jurusan</label>
              <Input
                name="jurusan"
                value={formData.jurusan}
                onChange={handleChange}
                placeholder="Masukkan jurusan"
              />
              <label>IPK (bagi mahasiswa/i)</label>
              <Input
                name="ipk"
                value={formData.ipk}
                onChange={handleChange}
                placeholder="Contoh: 3.85"
              />
              <label>Nama Ibu</label>
              <Input
                name="namaIbu"
                value={formData.namaIbu}
                onChange={handleChange}
                placeholder="Masukkan nama ibu"
              />
              <label>Pekerjaan Ibu</label>
              <Input
                name="pekerjaanIbu"
                value={formData.pekerjaanIbu}
                onChange={handleChange}
                placeholder="Masukkan pekerjaan ibu"
              />
              <label>Nama Ayah</label>
              <Input
                name="namaAyah"
                value={formData.namaAyah}
                onChange={handleChange}
                placeholder="Masukkan nama ayah"
              />
              <label>Pekerjaan Ayah</label>
              <Input
                name="pekerjaanAyah"
                value={formData.pekerjaanAyah}
                onChange={handleChange}
                placeholder="Masukkan pekerjaan ayah"
              />
              <label>Agama</label>
              <Input
                name="agama"
                value={formData.agama}
                onChange={handleChange}
                placeholder="Masukkan agama"
              />
              <label>Nomor HP</label>
              <Input
                name="nomorHp"
                value={formData.nomorHp}
                onChange={handleChange}
                placeholder="Masukkan nomor HP"
              />
              <label>Alamat Rumah</label>
              <Input
                name="alamatRumah"
                value={formData.alamatRumah}
                onChange={handleChange}
                placeholder="Masukkan alamat rumah"
              />
              <label>Alamat Sekolah/Universitas</label>
              <Input
                name="alamatSekolah"
                value={formData.alamatSekolah}
                onChange={handleChange}
                placeholder="Masukkan alamat sekolah/universitas"
              />
              <label>Riwayat Pendidikan SD</label>
              <Input
                name="riwayatPendidikanSD"
                value={formData.riwayatPendidikanSD}
                onChange={handleChange}
                placeholder="Masukkan riwayat pendidikan SD"
              />
              <label>Tahun Lulus SD</label>
              <Input
                name="tahunLulusSD"
                value={formData.tahunLulusSD}
                onChange={handleChange}
                placeholder="Masukkan tahun lulus SD"
              />
              <label>Tempat SD</label>
              <Input
                name="tempatSD"
                value={formData.tempatSD}
                onChange={handleChange}
                placeholder="Masukkan tempat SD"
              />
              <label>Alasan Magang</label>
              <Input
                name="alasanMagang"
                value={formData.alasanMagang}
                onChange={handleChange}
                placeholder="Masukkan alasan magang"
              />
              <label>Jadwal Magang</label>
              <Input
                name="jadwalMagang"
                value={formData.jadwalMagang}
                onChange={handleChange}
                placeholder="Masukkan jadwal magang"
              />
              <label>Keterampilan</label>
              <Input
                name="keterampilan"
                value={formData.keterampilan}
                onChange={handleChange}
                placeholder="Masukkan keterampilan"
              />
              <label>Unit Magang</label>
              <Input
                name="unitMagang"
                value={formData.unitMagang}
                onChange={handleChange}
                placeholder="Masukkan unit magang"
              />
              <div className="col-span-2 mt-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isDataCorrect}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Saya menyatakan bahwa data yang diisi adalah benar.
                </label>
              </div>

              <div className="col-span-2 text-center mt-6">
                <Button onClick={handleSubmit} type="button" disabled={!isDataCorrect}>
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataPage;
