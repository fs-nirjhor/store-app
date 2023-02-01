import React from 'react';
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(res => res.json())
    .then(data => setCategories(data) );
  }, []);
return (
  <div className="bg-primary ">
      <Link to="/"><button className="btn btn-light btn-sm  m-2">Home</button></Link>
      <Link to="review"><button className="btn btn-light btn-sm m-2">Order Review</button></Link> <br />
      {
        categories.map(category => <Link to={`category/${category}`} key={category}><button className="btn btn-warning btn-sm m-2">{category}</button></Link>)
      }

  </div>
);
};

export default Nav;