import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
        <div className="component-wrapper" key={id}>
          <Link to={`/product/${id}`}>
            <div className="card-wrapper">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="price">${price}</div>
                <div className="category">{category}</div>
              </div>
            </div>
          </Link>
        </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
