import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('car-background-image.png')" }}
    >
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg max-w-xl">
        <h1 className="text-4xl font-bold pb-5 text-gray-800 text-center">
          Welcome to Car World!
        </h1>
        <p className="text-xl text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          odit enim magnam reiciendis nisi. Impedit ipsa odit minima unde
          eveniet pariatur animi nisi itaque perspiciatis quisquam ut iste
          repellat, porro recusandae nesciunt aliquam voluptas quae dolorem.
          Nisi atque aliquam laborum!
        </p>
      </div>
    </div>
  );
};

export default Hero;
