import React from 'react';
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../Product/Product";

const CategoriesProducts = () => {
 const {category} = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
   const url = `https://fakestoreapi.com/products/category/${category}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data) );
  }, [category]);
return (
  <div>
    <h3>{category} products: {products.length}</h3>
    {
      products.map(product=> <Product product={product} key={product.id} ></Product>)
    }
  </div>
);
};

export default CategoriesProducts;