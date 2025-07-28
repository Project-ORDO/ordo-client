
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
