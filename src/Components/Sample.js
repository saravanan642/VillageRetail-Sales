import React from "react";

const Sample = () => {
    return (
        <header className="">
            {/* <div className="flex items-center gap-8 justify-between bg-black text-white px-6 py-4
      lg:text-green-950
      md:text-red-900
      sm:text-orange-950
      ">
        
        <h1 className="text-xl font-bold  ml-[10%] ">
          MySite
        </h1>

        <nav className="flex gap-[30%] mr-[30%]">
          <a className="hover:text-green-400" href="Home">Home</a>
          <a className="hover:text-green-400" href="Retailers">Retailers</a>
          <a className="hover:text-green-400" href="Services">Services</a>
          <a className="hover:text-green-400" href="About">About</a>
        </nav>

      </div> */}

            <p className=" text-green-700 md:text-3xl sm:text-red-800 lg:text-indigo-500">welcome to React App using the Responsive</p>
            <div className="flex sm:inline">
                <h1 className="text-red-700 text-4xl lg:text-green-900 sm:text-blue-800 md:text-gray-950
                                               sm:text-7xl">Saravanan</h1>
                <p className="text-4xl sm:text-7xl">Pavinkumar</p>

            </div>
        </header>
    );
};

export default Sample;
