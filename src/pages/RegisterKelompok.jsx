import blue from "../assets/blue.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/logo.png";


const RegisterKelompok = () => {
  return (
    <div className="grid grid-cols-2  max-w-[95rem] max-h-[50rem] h-auto mx-auto">
      <div className="relative bg-blue-300 h-screen">
  <img
    src={blue}
    className="h-full w-full object-cover"
    alt="Background"
  />

<div className="absolute inset-0 flex items-center justify-center">
  <div className="bg-white/10 items-center backdrop-blur-md text-center w-[80%] h-[60%] sm:w-[60%] px-6 py-4 rounded-lg shadow-lg">
    <img src={logo} alt="Logo" className="h-25 w-25 object-contain mx-auto mt-7" />
    <h1 className="text-4xl font-bold text-white italic mt-7">
      Badan Pusat Statistik
    </h1>
    <h1 className="text-4xl font-bold text-white italic">
      Sumatera Barat
    </h1>
    <div className="mt-10 text-white font-small text-sm px-5 text-start">
      Daftarkan diri Anda untuk mengikuti program magang yang bermanfaat di Badan Pusat Statistik Sumatera Barat.
    </div>
    <div className="mt-20 text-white font-small text-sm px-5 text-start">
      Anda sudah punya akun?
    </div>
    {/* Memastikan posisi Sign in tetap di kiri */}
    <div className="mb-1 text-white font-small text-lg px-5 text-start font-medium">
      Sign in
    </div>
  </div>
</div>




</div>


      <div className="bg-blue-500">
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
          <div className="bg-white/100 backdrop-blur-md shadow-lg rounded-lg p-6 w-full max-w-md">
            <h1 className="text-3xl text-blue-premier font-bold mb-10 text-center">
              Register Kelompok
            </h1>
            <div className="mb-4">
              <Input label="Institusi" placeholder="Masukkan Asal Institusi" className="border-blue-premier text-blue-premier" />
            </div>
            <div className="mb-4">
              <Input label="Ketua" placeholder="Masukkan Nama Ketua Tim" className="border-blue-premier" />
            </div>
            <div className="mb-4">
              <Input label="Email" placeholder="Masukkan Email Ketua Tim" className="border-blue-premier" />
            </div>
            <div className="mb-4">
              <Input label="Anggota" placeholder="Masukkan Nama Anggota Tim" className="border-blue-premier" />
            </div>
            <div className="mb-4">
              <Input
                label="Surat Pengantar"
                placeholder="Upload Surat Pengantar"
                type="file"
                className="border-blue-premier"
              />
            </div>
            <div className="mb-4">
              <Input
                label="Surat Balasan"
                placeholder="Upload Surat Balasan"
                type="file"
                className="border-blue-premier"
              />
            </div>
            <div className="flex justify-center">
              <Button variant="primary" label="Register" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterKelompok;
