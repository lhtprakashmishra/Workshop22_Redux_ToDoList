import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../reducers/cartReducer"; // Import the removeCart action

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch(); // Get the dispatch function
  console.log(cart);

  const handleRemoveFromCart = (id) => {
    dispatch(removeCart(id)); // Dispatch the removeCart action with the product ID
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-bold text-lg">{product.title}</h2>
                  <span className="text-gray-800">${product.price}</span>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(product.id)} // Call handleRemoveFromCart with product ID
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
