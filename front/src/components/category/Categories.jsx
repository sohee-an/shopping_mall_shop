import React from "react";
import styled from "styled-components";
import { moblie } from "../../responsive";

import CategoryItem from "./CategoryItem";
import { categories } from "../../data";
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
const Container = styled.div`
  display: flex;
  padding: 20px;
  ${moblie({ padding: "0", flexDirection: "column" })}
`;
