
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <>
      <Navbar />
     <main className=" p-4">    {/* i have removed min-h-screen because it is causing unwanted white space */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
