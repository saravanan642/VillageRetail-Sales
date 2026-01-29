import React from "react";

const Sample = () => {
  return (
    <header className="bg-black text-white px-6 py-4">
      <div className="flex items-center gap-8 justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-400 ml-[10%]">
          MySite
        </h1>

        {/* Menu */}
        <nav className="flex gap-[30%] mr-[30%]">
          <a className="hover:text-green-400" href="Home">Home</a>
          <a className="hover:text-green-400" href="Retailers">Retailers</a>
          <a className="hover:text-green-400" href="Services">Services</a>
          <a className="hover:text-green-400" href="About">About</a>
        </nav>

      </div>
    </header>
  );
};

export default Sample;
