import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed w-full">
      <nav className="bg-white py-4 dark:bg-black">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <button
            href="#"
            className="flex items-center cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src="/assets/images/logo-no-background.png"
              className="h-6 mr-3 sm:h-9"
              alt="hrmap Logo"
            />
          </button>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block"></div>
            <ThemeToggle />
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="ml-2  text-white bg-primary hover:bg-primaryHover font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  dark:hover:bg-primaryHover focus:outline-none"
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
