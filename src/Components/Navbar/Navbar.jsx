import { React, useEffect ,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HamburgerMenu from '../MobileMenu/HamburgerMenu';
import ProductCart from '../ProductCart/ProductCart';
import { useCart } from '../../Context/CartContext';
import "./Navbar.css";


const Navbar = () => {
  const location = useLocation();
  const { isCartOpen, toggleCart, getTotalItems } = useCart();

  const [isOpen , setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  // بستن منو با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      const hamburgerMenu = document.querySelector('.hamburger-menu');
      const menuIcon = document.querySelector('.menu-icon');
      
      if (isOpen && hamburgerMenu && !hamburgerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

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
        
      <div onClick={handleClick} className="menu-icon hover:text-gray-300 md:hidden me-6 duration-100 hover:cursor-pointer">
          <MenuIcon />
        </div>
        <div className="hover:text-gray-300 me-1 hidden md:block duration-100 hover:cursor-pointer">
          <HowToRegIcon />
        </div>
        <div className="hover:text-gray-300 me-1 hidden md:block duration-100 hover:cursor-pointer">
          <LoginIcon />
        </div>
        <div onClick={toggleCart} className="cart-icon hover:text-gray-300 me-1 duration-100 hover:cursor-pointer relative">
          <ShoppingCartOutlinedIcon />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </div>
        
        <div>

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
      
      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <ProductCart isCartOpen={isCartOpen} setIsCartOpen={toggleCart} />
    </div>
  );
};

export default Navbar;
