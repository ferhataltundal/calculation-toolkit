import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Docs = () => {
  return (
    <div className="relative w-full flex justify-center flex-row gap-3">
      <Sidebar />
      <div className="w-full flex bg-red-900">
        <Outlet />
      </div>
    </div>
  );
};

export default Docs;
