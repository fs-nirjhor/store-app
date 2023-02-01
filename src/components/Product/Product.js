import React from 'react';
import { useState } from "react";
import {Link} from "react-router-dom";

const Product = (props) => {
  const {category,image,price,title,rating,id} = props.product;
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
return (
  <div className="row mb-2 border rounded">
    <div className="col-4">
      <img src={image} alt="loading.." className="w-100 h-100 py-1"/>
    </div>
    <div className="col-8">
    <Link to={`product/${id}`}>
      <h5>{title}</h5>
    </Link>
      <big className="text-danger" ><strong>Only </strong>${price}</big>
      { showInfo && 
      <div>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Available:</strong> {rating.count}</p>
      <p><strong>Rating: </strong>{rating.rate}</p>
      </div>
      }
      <br />
      <button className="btn btn-warning btn-sm my-1 ">Buy Now</button>
      <button className="btn btn-warning btn-sm my-1 mx-5" onClick={handleInfo}>More Info</button>
    </div>
  </div>
);
};

export default Product;