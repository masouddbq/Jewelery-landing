import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./Navbar.css";


const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "دستبند", link: "/bangle", id: 1 },
    { name: "گردنبند", link: "/chain", id: 2 },
    { name: "زنانه", link: "/women", id: 3 },
    { name: "مردانه", link: "/men", id: 4 },
    { name: "خانه", link: "/", id: 5 },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex fixed text-white top-0 z-50 rounded-b-3xl p-2 bg-gradient-to-tl from-main-green to-gray-800 justify-around items-center w-full">
      <div className="flex justify-evenly w-[80px] text-4xl">
        <div className="hover:text-gray-300 duration-100 hover:cursor-pointer">
          <HowToRegIcon />
        </div>
        <div className="hover:text-gray-300 duration-100 hover:cursor-pointer">
          <LoginIcon />
        </div>
      </div>
      <div className="hidden md:flex justify-center md:ms-28 items-center">
        {navLinks.map((link) => (
          <Link
            to={link.link}
            key={link.id}
            className={`text-white text-sm md:text-lg hover:text-white transition-colors duration-75 ease-linear mx-2 ${location.pathname === link.link ? "active-link" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="md:text-2xl sm:text-sm">
        <h1>لُمیـــــــــــــــــــــــــــــسا</h1>
      </div>
    </div>
  );
};

export default Navbar;
