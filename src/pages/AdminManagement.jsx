import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ButtonTutup from "../components/ButtonTutup";
import Popup from "./popUp/Admin";

const AdminManagement = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Admin 1", email: "admin1@example.com", role: "admin", password: "password1" },
    { id: 2, name: "Admin 2", email: "admin2@example.com", role: "superadmin", password: "password2" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "admin",
    password: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [editAdmin, setEditAdmin] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editAdmin) {
      // Update admin
      setAdmins((prevAdmins) =>
        prevAdmins.map((admin) =>
          admin.id === editAdmin.id ? { ...admin, ...formData } : admin
        )
      );
    } else {
      // Tambah admin baru
      const newAdmin = {
        id: admins.length + 1,
        name: formData.name,
        email: formData.email,
        role: formData.role,
        password: formData.password,
      };
      setAdmins([...admins, newAdmin]);
    }

    setFormData({ name: "", email: "", role: "admin", password: "" });
    setIsPopupVisible(false);
    setEditAdmin(null);
  };

  const handleEditAdmin = (admin) => {
    setEditAdmin(admin);
    setFormData(admin);
    setIsPopupVisible(true);
  };

  const handleDeleteAdmin = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      setAdmins(admins.filter((admin) => admin.id !== id));
    }
  };

  return (
    <div className="flex shadow max-w-[95rem] mx-auto">
      <Sidebar />
      <div className="flex-1 ml-[250px] mx-auto h-screen">
        <Navbar />
        <div className="p-[100px]">
          <Popup
            isVisible={isPopupVisible}
            onClose={() => {
              setIsPopupVisible(false);
              setEditAdmin(null);
              setFormData({ name: "", email: "", role: "admin", password: "" });
            }}
            onSubmit={handleFormSubmit}
            formData={formData}
            onInputChange={handleInputChange}
          />

          <div className="shadow-lg p-6 bg-white rounded-md mt-10">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-blue-premier text-3xl font-bold">Daftar Admin</h1>
              <Button
                onClick={() => setIsPopupVisible(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Tambah Admin
              </Button>
            </div>
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
                      <Button
                        onClick={() => handleEditAdmin(admin)}
                        className="text-blue-500 hover:underline focus:outline-none mr-4"
                      >
                        Edit
                      </Button>
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
    </div>
  );
};

export default AdminManagement;
