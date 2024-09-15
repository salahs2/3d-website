import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin, github} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent" 
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-8x1 mx-auto'>
        <div
          className='flex items-center gap-3'
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain cursor-pointer flex' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '
             onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            Salah Salah
          </p>
          <img src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/salahsalah/', '_blank')} alt='linkedin' className='w-6 h-6 object-contain cursor-pointer flex ' />
          <img src={github} onClick={() => window.open('https://github.com/salahs2', '_blank')} alt='linkedin' className='w-6 h-6 object-contain cursor-pointer flex ' />
        </div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;