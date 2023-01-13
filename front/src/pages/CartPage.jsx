import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
import { moblie } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethod";

const KEY = process.env.REACT_APP_STRIPE;

const CartPage = () => {
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const cart = useSelector((state) => state.cart);

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res.data);
        navigate("/success", { state: { data: res.data } });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total]);

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
            {cart.products.map((cartProduct) => {
              return (
                <Product>
                  <ProductDetail>
                    <Image src={cartProduct.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b>
                        {cartProduct.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b>
                        {cartProduct._id}
                      </ProductId>
                      <ProductColor color={cartProduct.color} />
                      <ProductSize>
                        <b>Size:</b>
                        {cartProduct.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{cartProduct.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>{cartProduct.price}원</ProductPrice>
                  </PriceDetail>
                </Product>
              );
            })}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total}원</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-5000원</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}원</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="A.S.O Shop"
              image="https://img.freepik.com/free-psd/shopping-cart-icon-isolated-3d-render-ilustration_439185-12373.jpg?w=740&t=st=1673333694~exp=1673334294~hmac=5026329acde05a7aba7091b7dfce1c98625651db198d4b8dedc142e62c44c161"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartPage;

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
