import React from 'react';
import { useState, useEffect } from "react";
import Product from "../Product/Product";

const WomensClothing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://fakestoreapi.com/products/category/women's%20clothing`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);
  
return (
  <div>
      { 
  products.map(product => <Product product={product} key={product.id}/> )
  }
  </div>
);
};

export default WomensClothing;