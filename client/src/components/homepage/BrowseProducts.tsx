import sortIcon from "/iconamoon--arrow-down-2-thin.svg";
import "./Home.css";

import { products, ProductArr } from "../products/products";
import React, { useContext } from "react";
import { CartContext, CartInterface } from "../cart/CartProvider";

import Swal from "sweetalert2";

const BrowserHeader = () => {
  return (
    <div className="browse-header">
      <h1 className="browse-title">Browse All Products</h1>
      <div className="browse-icons">
        <p>SORT BY</p>
        <img src={sortIcon} alt="Sort by icon" />
      </div>
    </div>
  );
};

//TODO add add to cart button on img - added to cart confirmation.

const BrowserBody = () => {


  const { addToCart } = useContext(CartContext);


  const handleAddItem = (event: React.MouseEvent, product: ProductArr) => {

    event.preventDefault();

    const newProduct: CartInterface = { ...product, quantity: 1 };
    addToCart(newProduct);
    Swal.fire({
        title: `${newProduct.name} was added to cart!`,
        icon: "success",
        confirmButtonColor: "#1f1f1f"
      });
  };
  

  const Product = ({ product }: { product: ProductArr }) => {
    return (
      <div className="browse-product-container" onClick={(event) => handleAddItem(event, product)} key={product.id}>
        <img
          className="browse-product-img"
          width="150px"
          height="auto"
          src={product.img}
          alt="product image"
          loading="lazy"
        />
        <div>
          <p className="browse-product-title">{product.name}</p>
          <p className="browse-product-description">{product.description}</p>
          <p className="browse-product-price">{product.price}$</p>
        </div>
      </div>
    );
  };

  return (
    <div className="browse-body-container">
      <div className="column">
        <div className="browse-product-container one">
          <Product product={products[0]} />
        </div>
        <div className="browse-product-container two">
          <Product product={products[1]} />
        </div>
        <div className="browse-product-container three">
          <Product product={products[2]} />
        </div>
      </div>
      <div className="column">
        <div className="browse-product-container four">
          <Product product={products[3]} />
        </div>
        <div className="browse-product-container five">
          <Product product={products[4]} />
        </div>
        <div className="browse-product-container six">
          <Product product={products[5]} />
        </div>
      </div>
      <div className="column three">
        <div className="product-seven-eight">
          <div className="browse-product-container seven">
            <Product product={products[6]} />
          </div>
          <div className="browse-product-container eight">
            <Product product={products[7]} />
          </div>
        </div>

        <div className="browse-product-container nine">
          <Product product={products[8]} />
        </div>
      </div>
    </div>
  );
};

const BrowseProducts = () => {
  return (
    <>
      <BrowserHeader />
      <div className="browse-container">
        <BrowserBody />
      </div>
    </>
  );
};

export default BrowseProducts;
