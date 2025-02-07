import Logo from '../components/Logo';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-blue-600/90 to-blue-800/90 text-gray-100 py-10">
      <div className="relative z-10 max-w-[95rem] px-6 xl:px-0 mx-auto">
        <div className="grid grid-cols-3 gap-x-8 items-start">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Informasi */}
          <div className="space-y-2 text-sm">
            <p className="hover:text-gray-200 text-lg">Badan Pusat Statistik</p>
            <p className="hover:text-gray-200 text-lg">Provinsi Sumatera Barat</p>
            <p className="hover:text-gray-200 text-lg">BPS-Statistics Sumatera Barat Province</p>
          </div>

          {/* Kontak */}
          <div className="space-y-2 text-sm">
            <p className="hover:text-gray-200 text-lg">Jl. Khatib Sulaiman No.48 Padang-Sumatera Barat 25135</p>
            <p className="hover:text-gray-200 text-lg">Telp (0751) 442158-442160</p>
            <p className="hover:text-gray-200 text-lg">Mailbox: sumbar@bps.go.id atau pst1300@bps.go.id</p>
          </div>
        </div>

        {/* Garis dan Hak Cipta */}
        <div className="border-t border-gray-200  mt-5  text-center text-sm">
          <p className="mt-5">Hak Cipta © 2025 Badan Pusat Statistik</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
