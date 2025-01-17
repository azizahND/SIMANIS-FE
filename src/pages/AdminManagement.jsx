import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ButtonTutup from "../components/ButtonTutup";

const AdminManagement = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Admin 1", email: "admin1@example.com", role: "admin", password: "password1" },
    { id: 2, name: "Admin 2", email: "admin2@example.com", role: "superadmin", password: "password2" },
  ]); // Dummy data admin
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "admin", // Default role
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newAdmin = {
      id: admins.length + 1, // Simulasi ID
      name: formData.name,
      email: formData.email,
      role: formData.role,
      password: formData.password, // Add password field
    };
    setAdmins([...admins, newAdmin]); // Add new admin to the list
    setFormData({ name: "", email: "", role: "admin", password: "" }); // Reset form
  };

  const handleDeleteAdmin = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      setAdmins(admins.filter((admin) => admin.id !== id)); // Remove admin from list
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 min-h-screen ml-64 pl-10">
        <Navbar />
        
        {/* Form to Add New Admin */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 mt-14">
          <h2 className="text-2xl font-semibold mb-6 text-blue-premier">Tambah Admin Baru</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="w-full sm:w-1/2">
                  <label className="text-sm font-medium text-gray-700">Nama</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" // Ganti blue-premier dengan blue-300
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" // Ganti blue-premier dengan blue-300
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" // Ganti blue-premier dengan blue-300
                >
                  <option value="admin">Admin</option>
                  <option value="superadmin">Superadmin</option>
                </select>
              </div>
              <div className="w-full">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" // Ganti blue-premier dengan blue-300
                  required
                />
              </div>
            </div>
            {/* Add Admin Button centered */}
            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                className="bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-premier"
              >
                Tambah Admin
              </Button>
            </div>
          </form>
        </div>

        {/* Admin List Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-premier">Daftar Admin</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-premier text-white">
                <th className="border border-gray-300 p-3 text-center">Nama</th>
                <th className="border border-gray-300 p-3 text-center">Email</th>
                <th className="border border-gray-300 p-3 text-center">Role</th>
                <th className="border border-gray-300 p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id} className="text-center hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{admin.name}</td>
                  <td className="border border-gray-300 p-3">{admin.email}</td>
                  <td className="border border-gray-300 p-3">{admin.role}</td>
                  <td className="border border-gray-300 p-3">
                    <ButtonTutup
                      onClick={() => handleDeleteAdmin(admin.id)}
                      className="text-red-500 hover:underline focus:outline-none"
                    >
                      Hapus
                    </ButtonTutup>
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

export default AdminManagement;
