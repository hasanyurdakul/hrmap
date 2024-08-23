import { useEffect, useState } from "react";

// import DashboardCard01 from "../partials/dashboard/DashboardCard01";
// import DashboardCard02 from "../partials/dashboard/DashboardCard02";
// import DashboardCard03 from "../partials/dashboard/DashboardCard03";
// import DashboardCard04 from "../partials/dashboard/DashboardCard04";
// import DashboardCard05 from "../partials/dashboard/DashboardCard05";
// import DashboardCard06 from "../partials/dashboard/DashboardCard06";
// import DashboardCard07 from "../partials/dashboard/DashboardCard07";
// import DashboardCard08 from "../partials/dashboard/DashboardCard08";
// import DashboardCard09 from "../partials/dashboard/DashboardCard09";
// import DashboardCard10 from "../partials/dashboard/DashboardCard10";
// import DashboardCard11 from "../partials/dashboard/DashboardCard11";
// import DashboardCard12 from "../partials/dashboard/DashboardCard12";
// import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { getToken } from "../utils/Utils";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const selector = useSelector((state) => state.user);
  useEffect(() => {
    let token = getToken();
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 pt-4 md:pt-1 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center ">
              <div className="grid grid-cols-12 grid-rows-1 py-2 gap-6">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
