import React from 'react';
import img1 from "../Assests/Home images/img 1.avif";

const Home = () => {
  return (
    <div>
      <img src={img1} alt="image1"  className="w-full h-[640px] object-cover"/>
    </div>
  );
};

export default Home;
