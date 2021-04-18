import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CardProducts = styled.div`
  margin: 50px auto 10px 10px;
  border: 2px solid black;
  border-radius: 7px;
`;

const Heart = styled.div`
  margin-left: 80px;
  display: inline;
`;

function ProductCard(props) {
  const [like, setLike] = useState(false);
  const { img, name, price, sizes, id } = props;
  console.log("props", props);

  return (
    <CardProducts>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price: {price}$</p>
          <Link to={`/productinf/${id}`}>
            <Button variant="outline-dark">More information</Button>
          </Link>
          <Heart>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => setLike(true)}
              color={like && "red"}
            ></FontAwesomeIcon>
          </Heart>
        </Card.Body>
      </Card>
    </CardProducts>
  );
}

export default ProductCard;
