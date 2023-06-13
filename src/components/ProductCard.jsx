import React from "react";
import "../assets/styles/ProductCard.css";

const ProductCard = ({
  imageUrl,
  altText,
  price,
  title,
  brand,
  description,
  themeColor,
}) => {
  return (
    <div className="card">
      <div className="card--front">
        <div
          className="front--img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="front--price">${price}</div>
      </div>
      <div className="card--back">
        <div className="card--content">
          <div className="content--row">
            <h4 className="content--title">{title}</h4>
            <h4 className="content--price">${price}</h4>
          </div>
          <div className="content--row brand--row">
            <p className="content-brand">{brand}</p>
          </div>
          <div className="content--row">
            <p className="content--description">{description}</p>
          </div>
          <div className="content--row buy--row">
            <button
              className="content--buy"
              style={{
                background: `linear-gradient(to bottom right, rgb(53, 53, 53) 0.5%, ${themeColor})`,
              }}
            >
              Buy now
            </button>
            <button className="content--cart" style={{ color: themeColor }}>
              <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
