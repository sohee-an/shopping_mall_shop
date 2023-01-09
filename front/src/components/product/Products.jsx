import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Product from "./Product";
export const SortType = {
  SORT: "newest",
  ASC: "asc",
  DESC: "desc",
};

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("filters:", filters);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `/api/products/?category=${cat}` : `/api/products`
        );

        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    // cat && 필터를 적용한 상품들
    if (filters && cat) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, cat, filters]);

  console.log("filteredProducts:", filteredProducts);

  //sort를 적용한 상품들
  useEffect(() => {
    if (sort === SortType.SORT) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === SortType.ASC) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === SortType.DESC) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        : products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
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
