import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { useState } from "react";

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header isOpen={isOpen} onToggleMenu={handleToggleMenu} />
      <main>
        <Outlet />
      </main>
      <Footer />

      <MobileMenu isOpen={isOpen} onToggleMenu={handleToggleMenu} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default SharedLayout;
