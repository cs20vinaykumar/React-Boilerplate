import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$999",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$499",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$199",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: "$299",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
