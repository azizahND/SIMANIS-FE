import Button from "./Button";

const NavbarLanding = () => {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-blue-premier text-sm py-3 sticky top-0 z-10">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <a
            className="flex items-center gap-x-2 text-xl font-semibold text-white focus:outline-none focus:opacity-80"
            href="/home"
            aria-label="Brand"
          >
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="w-12 h-12 h-auto mr-2"
            />
            <div className="grid grid-rows-2 grid-flow-col gap-0">
              <div className="text-xl italic font-bold">
                BADAN PUSAT STATISTIK
              </div>
              <div className="text-base italic font-bold">
                PROVINSI SUMATERA BARAT
              </div>
            </div>
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-center sm:mt-0 sm:ps-5">
            <a className="text-lg text-white hover:text-gray-400 focus:outline-none" href="#home" aria-current="page">Home</a>
            <a className="text-lg text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#tujuan">Tujuan</a>
            <a className="text-lg text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#kontak">Kontak</a>
            <a>
              <button>
                <Button variant={"primary"} label={"Login"} className="font-bold text-lg"/>
              </button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarLanding;
