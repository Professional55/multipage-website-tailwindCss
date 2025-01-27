import React from 'react';

const Cars = () => {
  const carData = [
    { id: 1, name: "Honda Civic", price: "PKR 9,899,000", description: "Honda Civic 2024 Blackish", image: "civic-2024.png" },
    { id: 2, name: "Hilux 4x4", price: "PKR 1.1 - 1.54 crore", description: "Toyota Hilux Dark Gray", image: "hilux-2024.png" },
    { id: 3, name: "Corolla GLI", price: "PKR 3,892,000 ", description: "Toyota Corolla GLI", image: "corolla-2024.png" },
    { id: 4, name: "Land cruiser ", price: "PKR 12.0 crore", description: "Toyota Land Cruiser SUV ", image: "landcruser-2024.png" },
    { id: 5, name: "Suzuki Cultus", price: "Rs 2.33 Million", description: "Suzuki Cultus 2024", image: "cultus-2024.png" },
    { id: 6, name: "Suzuki Alto", price: "PKR 3,038,540", description: "Suzuki Alto VXL 2024", image: "alto-2024.png" },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {carData.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {car.name}
              </h3>
              <p className="text-gray-600 mb-4">{car.description}</p>
              <div className="text-lg font-bold text-blue-600 mb-4">
                {car.price}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
