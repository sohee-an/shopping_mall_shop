import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { moblie } from "../responsive";
import { useLocation } from "react-router-dom";

import Products from "../components/product/Products";
import Newsletter from "../components/product/Newsletter";

export const SortType = {
  SORT: "newest",
  ASC: "asc",
  DESC: "desc",
};

const ProductListPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({ color: "white", size: "XS" });
  const [sort, setSort] = useState(SortType.SORT);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // console.log("filters", filters);
  return (
    <Container>
      <Title>{cat}</Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort filter2</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value={SortType.SORT}>Newest</Option>
            <Option value={SortType.ASC}>Price(asc)</Option>
            <Option value={SortType.DESC}>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products cat={cat} filters={filters} sort={sort} />

      <Newsletter />
    </Container>
  );
};

export default ProductListPage;

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
const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 3px;
`;
