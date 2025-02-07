import blue from "../assets/blue.jpg";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${blue})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form Container */}
      <div className="relative backdrop-blur-md bg-white/10 rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Logo and Header */}
        <div className="flex items-center justify-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 object-contain"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-white italic">
              Badan Pusat Statistik
            </h1>
            <h1 className="text-2xl font-bold text-white italic">
              Sumatera Barat
            </h1>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              className="block text-white font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <Input type="email" id="email" placeholder="Enter your email"  />
          </div>
          <div>
            <label
              className="block text-white font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <Button
            variant="premier"
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex justify-center"
          >
            Login
          </Button>
          <div className="mt-4 text-center text-white">
            <p>
              Belum punya akun?{" "}
              <Link
                to="/registerkelompok"
                className="text-white font-medium hover:underline"
              >
                Daftar di sini
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
