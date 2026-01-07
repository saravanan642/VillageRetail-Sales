import icon1 from "../Assests/happy-farmer-agriculture-farming-symbol-vector-illustration-2D7RD94.jpg";
import icon2 from "../Assests/vecteezy_extraordinary-artistic-urban-farmer-holding-fresh-produce_57721627.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
     
      <nav className="relative flex justify-between items-center border border-black text-white">

      
        <div className="flex items-center text-xl font-bold py-3 w-full bg-green-950">

        
          <div className="flex ml-[80px]">
            <img
              src={icon1}
              alt="logo"
              width={80}
              className="rounded-2xl border-4 border-gray-950 p-1 bg-white"
            />
            <h1 className="text-white m-[20px]">
              VillageRetail Sales
            </h1>
          </div>

 
          <div className="hidden md:flex gap-[70px] ml-[25%] mr-[5%]">
            <a className="hover:text-green-500 transition" href="Home">Home</a>
            <a className="hover:text-green-500 transition" href="About">About</a>
            <a className="hover:text-green-500 transition"  href="Retailers"> Retailers</a>
            <a className="hover:text-green-500 transition" href="Contacts">Services</a>
          </div>

        
          <div className="hidden md:flex bg-white p-1 border-4 border-gray-950 ml-[2%] rounded-xl items-center">
            <img src={icon2} alt="profile" width={50} />
            <a className="text-gray-800 pr-[20px] underline cursor-pointer hover:text-lime-600" href="login">
              Login
            </a>
          </div>
        </div>

 
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden absolute right-6 top-6 text-white text-4xl z-50"
        >
          ☰
        </button>
      </nav>

      
{menu && (
  <div className="md:hidden bg-green-900 text-white px-6 py-4 space-y-4">

    <a
      className="block hover:text-green-400"
      href="Home"
    >
      Home
    </a>

    <a
      className="block hover:text-green-400"
      href="Sales"
    >
      Sales
    </a>

    <a
      className="block hover:text-green-400"
      href="Retailers"
    >
      Retailers
    </a>

    <a
      className="block hover:text-green-400"
      href="Reports"
    >
      Reports
    </a>

    <div className="bg-white text-black p-2 rounded-xl flex items-center gap-2 w-fit">
      <img src={icon2} width={40} />
      <a
        className="underline cursor-pointer hover:text-lime-600"
        href="login"
      >
        Login
      </a>
    </div>

  </div>
)}

      
    </>
  );
};

export default Navbar;
