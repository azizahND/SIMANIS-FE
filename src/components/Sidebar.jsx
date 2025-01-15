import React from "react";
import {
  LogOut,
  ClipboardList,
  Users,
  Briefcase,
  Archive,
  ChartColumnBig,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { title: "Dashboard", icon: ChartColumnBig, route: "/dashboard" }, 
    { title: "Pendaftar", icon: ClipboardList, route: "/list-pendaftar" },
    { title: "Peserta", icon: Users, route: "/peserta" },
    { title: "Penugasan", icon: Briefcase, route: "/penugasan" },
    { title: "Arsip Surat", icon: Archive, route: "/arsip-surat" },
  ];

  return (
    <div className="fixed top-20 left-0 h-screen bg-white shadow-lg w-72 flex flex-col">
      <div className="h-full overflow-y-auto p-4 mt-5 flex-grow">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.route}
                    className="flex items-center gap-4 p-3 text-gray-700 hover:bg-blue-premier hover:text-white rounded-lg transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Logout Button at the bottom */}
      <div className="p-4">
        <button
          onClick={() => alert("Logout clicked")}
          className="flex items-center gap-4 w-full text-left p-3 ml-6 hover:text-blue-premier hover:font-bold text-gray-700 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;