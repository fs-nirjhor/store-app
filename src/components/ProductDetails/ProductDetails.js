import React from 'react';
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ProductDetails = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${productId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data));
  }, [productId]);
  const {category,image,price,title,description, rating} = product;
  
return (
  <div>
    <Card >
      <Card.Img variant="top" src={image} className="w-75 m-auto"/>
      <Card.Body>
        <Card.Title className="text-center bg-warning">{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item><strong>Category: </strong>{category}</ListGroup.Item>
        <ListGroup.Item><strong>Available: </strong>{rating?.count}</ListGroup.Item>
        <ListGroup.Item><strong>Rating: </strong>{rating?.rate}</ListGroup.Item>
        <ListGroup.Item className="text-danger"><strong>Price: </strong>${price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Add more</Card.Link>
        <Card.Link href="#">Remove</Card.Link>
      </Card.Body>
    </Card>
  </div>
);
};

export default ProductDetails;