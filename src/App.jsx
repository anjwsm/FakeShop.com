import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./containers/header/Header.jsx";
import ProductListing from "./containers/productListing/ProductListing.jsx";
import ProductDetail from "./containers/productDetail/ProductDetail.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={ProductListing} />
        <Route path="/product/:productId" exact Component={ProductDetail} />
        <Route>404 Not Found</Route>
      </Routes>
    </Router>
  );
}

export default App;
