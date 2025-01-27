import React from 'react';

const AboutPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center px-6"
      style={{ backgroundImage: "url('aboutcar-background.png')" }}
    >
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-black mb-6">
          Welcome to Car World where we bring the world of cars to your fingertips. Our mission is to
          simplify the car buying and selling process by providing a user-friendly platform for car enthusiasts,
          buyers, and dealers. With a wide selection of vehicles, expert advice, and a passion for innovation, we
          are committed to helping you find the perfect car to suit your lifestyle. At Car Rental, trust,
          transparency, and customer satisfaction drive everything we do. Whether you're searching for your dream
          car or seeking automotive insights, we are here to guide you every step of the way.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutPage;

