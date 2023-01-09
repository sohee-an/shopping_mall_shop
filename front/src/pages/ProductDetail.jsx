import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Remove, Add } from "@mui/icons-material";
import { moblie } from "../responsive";
import productApi from "../api/productApi";

import Navbar from "../components/home/Navbar";
import Announcement from "../components/home/Announcement";
import Newsletter from "../components/product/Newsletter";
import Footer from "../components/home/Footer";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product_id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  console.log(color, size);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await productApi.getPrdouctApi(product_id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [product_id]);
  console.log(product);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  /* update Cart */
  const handleClick = () => {};

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title> {product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}원</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((color) => (
                <FilterColor
                  key={color}
                  color={color}
                  onClick={() => setColor(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((size) => (
                  <FilterSizeOption key={size}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${moblie({ padding: "10px", flexDirection: "column" })};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${moblie({ height: "50vh", objectFit: "cover" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 15px 50px;
  ${moblie({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
  min-height: 150px;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
  ${moblie({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${moblie({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 700;
  margin-right: 10px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
