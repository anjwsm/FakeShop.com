import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import './productDetail.css';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="product-container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading </div>
      ) : (
        <div className="description-wrapper">
          <div className="image">
            <img src={image} />
          </div>
          <div className="description">
            <h1>{title}</h1>
            <h2>
              <a className="price">${price}</a>
            </h2>
            <h3 className="category">{category}</h3>
            <p>{description}</p>
            <h4 className="cart">Add to cart</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
