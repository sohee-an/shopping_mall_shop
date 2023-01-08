import React from "react";
import styled from "styled-components";
import { Remove, Add } from "@mui/icons-material";
import { moblie } from "../responsive";

import Navbar from "../components/home/Navbar";
import Announcement from "../components/home/Announcement";
import Newsletter from "../components/product/Newsletter";
import Footer from "../components/home/Footer";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image
            src={
              "https://img.freepik.com/premium-psd/minimalist-polo-shirt-design-mockup_23-2149330765.jpg?w=1060"
            }
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Light Hat</Title>
          <Desc>
            착용감이 매우 가볍고 돌아오는 초봄에 쓰기 좋습니다. 색깔은 조명에
            따라 조금은 달라질 수 있습니다.
          </Desc>
          <Price>7.87$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

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
  width: 65%;
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
