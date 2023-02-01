import React from 'react';
import Product from "../Product/Product";
import { useState, useEffect } from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
    .then(res => res.json())
    .then(data => setAllProducts(data));
  }, []);
return (
  <div>
  <h3>All products: {allProducts.length}</h3>
  { 
  allProducts.map(product => <Product product={product} key={product.id}/> )
  }
  </div>
);
};

export default AllProducts;