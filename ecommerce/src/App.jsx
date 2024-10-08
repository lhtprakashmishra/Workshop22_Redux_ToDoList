import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import the Redux store
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation";
import ProductList from "./components/products";
import Cart from "./components/carts";

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the app with Provider and pass the store */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
