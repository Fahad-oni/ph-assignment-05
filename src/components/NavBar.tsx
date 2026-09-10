import { GiHamburgerMenu } from 'react-icons/gi';
import Navlogo from '../assets/logo-text.png';

  const NavBar = () => {
  return (
    <>
      <nav className="grid grid-cols-3 items-center pt-4 px-4 md:px-6 sticky container mx-auto  ">
        <div className="md:hidden">
          <GiHamburgerMenu className='text-2xl' />
        </div>
        <div className="mr-6 sm:mr-0 ">
          <img src={Navlogo} alt="Dev Stack" className="" />
        </div>

        <div className="hidden md:flex gap-4 md:gap-2 lg:gap-4   text-sm font-semibold">
          <a
            href="#home"
            className="hover:border-b border-[#DB2777] focus:text-[#DB2777]"
          >
            Home
          </a>
          <a
            href="#technologies"
            className="hover:border-b border-[#DB2777] focus:text-[#DB2777]"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="hover:border-b border-[#DB2777] focus:text-[#DB2777]"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:border-b border-[#DB2777] focus:text-[#DB2777]"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:border-b border-[#DB2777] focus:text-[#DB2777]"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-1 sm:gap-3 place-content-end">
          <button className="btn text-[0.6rem] btn-sm sm:text-[0.9rem] sm:btn-sm lg:btn-md border-none rounded-2xl">
            Sign In
          </button>

          <button className="btn text-[0.6rem] btn-sm sm:text-[0.9rem] sm:btn-sm md:btn-md btn-secondary rounded-2xl">
            Sign Up
          </button>
        </div>
      </nav>
      <div className="divider"></div>
    </>
  );
};

export default NavBar;
