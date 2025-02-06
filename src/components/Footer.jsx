import Logo from '../components/Logo';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-blue-600/90 to-blue-800/90">
      <div className="relative z-10">
        <div className="max-w-[95rem] px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
          <div className="inline-flex items-center">
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">
                <div className="grid grid-cols-1 gap-4">
                  <div><Logo /></div>
                </div>
              </h4>

              <div className="flex just"></div>

              <div className="mt-10 ml-20 grid space-y-3 text-xl">
                <p className="inline-flex gap-x-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-100 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  Badan Pusat Statistik
                </p>
                <p className="inline-flex gap-x-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-100 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  Provinsi Sumatera Barat
                </p>
                <p className="inline-flex gap-x-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-100 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  BPS-Statistics Sumatera Barat Province
                </p>
                <p className="inline-flex gap-x-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-100 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  Jl. Khatib Sulaiman No.48 Padang-Sumatera Barat 25135
                </p>
                <p className="inline-flex gap-x-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-100 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  Telp (0751) 442158-442160
                </p>
                <p className="inline-flex gap-x-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-100 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  Mailbox : sumbar@bps.go.id atau pst1300@bps.go.id
                </p>
                
                <div className="border-t border-gray-200 pt-15"></div>
                
                <p className="inline-flex gap-x-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-100 dark:hover:text-neutral-200 dark:focus:text-neutral-200 pt-4">
                  Hak Cipta © 2025 Badan Pusat Statistik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;