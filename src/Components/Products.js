import React, { useState, useEffect } from "react";

import ProductCard from "./ProductCard";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Indie Flower", cursive;
  flex-wrap: wrap;
  margin: 50px auto 50px auto;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Indie Flower", cursive;
`;

function Products(props) {
  const { data } = props;

  return (
    <div>
      <Title>All Products</Title>
      <Card>
        {data.map((product) => {
          return (
            <ProductCard
              name={product.defaultArticle.name}
              img={product.images[0].url}
              price={product.price.value}
              sizes={product.variantSizes}
              id={product.defaultArticle.code}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Products;
