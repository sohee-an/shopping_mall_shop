import React from "react";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { moblie } from "../responsive";

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://img.freepik.com/free-photo/many-colorful-paper-shopping-bags-in-cart_23-2147892174.jpg?w=1060&t=st=1672910712~exp=1672911312~hmac=3eb9267c5937f9bae8e178accbf8c36668482009722f49c7eca70dd4ec83bc93" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>JESSIE THUNDER SHOES
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>JESSIE THUNDER SHOES
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>18000원</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://img.freepik.com/free-photo/many-colorful-paper-shopping-bags-in-cart_23-2147892174.jpg?w=1060&t=st=1672910712~exp=1672911312~hmac=3eb9267c5937f9bae8e178accbf8c36668482009722f49c7eca70dd4ec83bc93" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>JESSIE THUNDER SHOES
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>JESSIE THUNDER SHOES
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>18000원</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>9800원</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-5000원</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>4800원</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${moblie({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "none")};
  color: ${(props) => (props.type === "filled" ? "white" : "none")};
`;
const TopTexts = styled.div`
  ${moblie({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${moblie({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${moblie({ flexDirection: "column" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const ProductName = styled.div``;
const ProductId = styled.div``;
const ProductSize = styled.div``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${moblie({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${moblie({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 3px 0;
`;

const SummaryTitle = styled.div`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;
