import React from "react";
import styled from "styled-components";
import { moblie } from "../responsive";

import Navbar from "../components/home/Navbar";
import Announcement from "../components/home/Announcement";
import Products from "../components/product/Products";
import Newsletter from "../components/product/Newsletter";
import Footer from "../components/home/Footer";

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort filter2</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${moblie({
    margin: "0 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${moblie({ marginRight: "0" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${moblie({ margin: "0 10px" })}
`;
const Option = styled.option``;
