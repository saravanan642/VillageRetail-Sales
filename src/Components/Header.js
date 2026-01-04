import icon1 from "../Assests/happy-farmer-agriculture-farming-symbol-vector-illustration-2D7RD94.jpg"
import icon2 from "../Assests/vecteezy_extraordinary-artistic-urban-farmer-holding-fresh-produce_57721627.png"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center    text-white">

      {/* Logo */}
      <div className="flex items-center text-xl font-bold  py-3  w-full bg-green-950" >
        <div className=" flex  ml-[80px]">
          <img
            src={icon1}
            alt="logo"
            width={80}
            className=" rounded-2xl border-2 border-black p-1 bg-white  "
          />

          <h1 className="text-white m-[20px]">
            VillageRetail Sales
          </h1></div>

        <div className="   flex gap-[70px]  ml-[25%] mr-[5%]">
          <a href="#" className="hover:text-green-500 transition">Home</a>
          <a href="#" className="hover:text-green-500 transition">Sales</a>
          <a href="#" className="hover:text-green-500 transition">Retailers</a>
          <a href="#" className="hover:text-green-500 transition">Reports</a>
        </div>
        <div  className=" bg-white p-1 border border-solid border-black p-1 bg-white ml-[2%]  rounded-xl flex  items-center">
          <img
            src={icon2}
            alt="profile"
            width={50}
           
          />
          <a className=" text-gray-800  pr-[20px]   underline cursor-pointer hover:text-lime-600">Login</a>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
