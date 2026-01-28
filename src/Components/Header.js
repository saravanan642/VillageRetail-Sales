import icon1 from "../Assests/happy-farmer-agriculture-farming-symbol-vector-illustration-2D7RD94.jpg";
import icon2 from "../Assests/vecteezy_extraordinary-artistic-urban-farmer-holding-fresh-produce_57721627.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="relative bg-green-950 text-white overflow-x-hidden">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-3">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={icon1}
              alt="logo"
              className="w-14 md:w-20 rounded-2xl border-4 border-gray-950 p-1 bg-white"
            />
            <h1 className="text-lg md:text-xl font-bold">
              VillageRetail Sales
            </h1>
          </div>

          {/* Desktop Menu */}
          <div >
            <div className="  
              lg:font-bold
              lg:flex
              lg:text-xl
              lg:ml-[70%]
              gap-[140%]

              md:flex hidden
              md:font-normal
              
              md:gap-[50%]

              
              
              ">
              <a className="hover:text-green-400" href="Home">Home</a>
              <a className="hover:text-green-400" href="Retailers">Retailers</a>
              <a className="hover:text-green-400" href="Services">Services</a>
              <a className="hover:text-green-400" href="About">About</a>
            </div>

          </div>

          {/* Desktop Login */}
          <div className="hidden md:flex items-center gap-2 bg-white text-black px-3 py-1 rounded-xl border-4 border-gray-950 ml-[40%]">
            <img src={icon2} alt="profile" className="w-10" />
            <a className="underline hover:text-lime-600 " href="login">
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-green-900 text-white px-6 py-4 space-y-4">
          <a className="block hover:text-green-400" href="Home">Home</a>
          <a className="block hover:text-green-400" href="Sales">Sales</a>
          <a className="block hover:text-green-400" href="Retailers">Retailers</a>
          <a className="block hover:text-green-400" href="Reports">Reports</a>

          <div className="bg-white text-black p-2 rounded-xl flex items-center gap-2 w-fit">
            <img src={icon2} className="w-10" />
            <a className="underline hover:text-lime-600" href="login">
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
