import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </Container>
  );
};

export default Products;
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
