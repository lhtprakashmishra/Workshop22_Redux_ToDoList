import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../reducers/cartReducer"; // Import the addCart action

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // Get the dispatch function

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    dispatch(addCart(product)); // Dispatch addCart action with product as payload
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[8rem]">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1">
            <h2 className="font-bold text-lg mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">
              {product.description.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-800">
                ${product.price}
              </span>
              <span className="text-sm text-gray-600">
                ⭐ {product.rating.rate} ({product.rating.count})
              </span>
            </div>
          </div>
          <div className="p-4 mt-auto">
            <button
              onClick={() => handleAddToCart(product)} // Call handleAddToCart with product
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
