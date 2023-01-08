import React from "react";
import styled from "styled-components";
import { moblie } from "../../responsive";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${moblie({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 15px 15px;
`;
const Title = styled.h1`
  margin-bottom: 15px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  color: gray;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`;
