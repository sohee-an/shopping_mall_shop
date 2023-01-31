import React, { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import styled from "styled-components";

import Product from "./product";

export const SortType = {
  SORT: "newest",
  ASC: "asc",
  DESC: "desc",
};

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products/?category=${cat}` : `/products`
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
    if (cat) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [products, cat, filters]);

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
  // if (filteredProducts.length > 0) {
  //   filterContent = filteredProducts.map((product) => {
  //     return <Product key={product.id} product={product} />;
  //   });
  // }
  if (cat) {
    return (
      <Container>
        {filteredProducts.length !== 0 ? (
          filteredProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (
          <div>찾으시는 제품이 없습니다.</div>
        )}
      </Container>
    );
  }

  return (
    <Container>
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
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
