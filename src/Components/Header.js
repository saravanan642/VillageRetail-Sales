import { FaStore, FaSeedling, FaShoppingCart, FaChartLine, FaUser } from "react-icons/fa";
import icon1 from "../Assests/happy-farmer-agriculture-farming-symbol-vector-illustration-2D7RD94.jpg"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4  text-white">

      {/* Logo */}
      <div className="flex items-center gap-3 text-xl font-bold bg-green-950 px-6 py-3 justify-around w-full" >
        <div className=" flex"><img
          src={icon1}
          alt="logo"
          width={80}
          className=" rounded-2xl border-2 border-black p-1  "
        />

          <h1 className="text-white m-[20px]">
            VillageRetail Sales
          </h1></div>

        <div className="   flex gap-8">
          <a href="" className="text-white "> Home</a>
          <a href="" className="text-white">Sales</a>
          <a href="" className="text-white">Retailers</a>
          <a href="" className="text-white">Sales</a>
        </div>


      </div>


    </nav>
  );
};

export default Navbar;
