import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Remove, Add } from "@mui/icons-material";
import { moblie } from "../responsive";
import productApi from "../api/productApi";

import Newsletter from "../components/product/Newsletter";
import Footer from "../components/home/Footer";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addCartAction, updateCartAction } from "../redux/actions/cart";

const ProductDetailPage = () => {
  const location = useLocation();
  const product_id = location.pathname.split("/")[2];
  const [productInfo, setProductInfo] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState("S");
  const dispatch = useDispatch();
  const [userTokenCheck, setUserTokenCheck] = useState(null);
  const userToken = useSelector((state) => state.user.currentUser);
  const userId = useSelector((state) => state.user.currentUser?._id);
  const prevCart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  console.log("prev", prevCart);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await productApi.getPrdouctApi(product_id);
        // console.log("res", res.data);
        setProductInfo(res.data);
        setUserTokenCheck(userToken);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [product_id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  /* update Cart */
  const handleClick = () => {
    if (userTokenCheck === null) {
      navigate("/login");
    }
    if (color !== null && prevCart.products.length == 0) {
      const total = quantity * productInfo.price;
      dispatch(
        addCartAction({ ...productInfo, quantity, color, size, userId, total })
      );
      //dispatch(addProduct({ ...product, quantity, color, size }));
    } else if (color !== null && prevCart.products.length > 0) {
      const prevCartProductArray = prevCart.products;

      const total = quantity * productInfo.price;
      const product = productInfo._id;

      dispatch(
        updateCartAction({
          userId: userId,
          updateproduct: [
            ...prevCartProductArray,
            { product, quantity, color, size, total },
          ],
        })
      );
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={productInfo.img} />
        </ImgContainer>
        <InfoContainer>
          <Title> {productInfo.title}</Title>
          <Desc>{productInfo.desc}</Desc>
          <Price>{productInfo.price}원</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {productInfo.color?.map((color) => (
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
                {productInfo.size?.map((size) => (
                  <FilterSizeOption key={size}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          {color === null ? (
            <ColorCheck>색깔을 골라주세요 </ColorCheck>
          ) : (
            <ColorChoice>{color}색을 고르셨습니다.</ColorChoice>
          )}
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
    </Container>
  );
};

export default ProductDetailPage;

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
const ColorCheck = styled.span`
  color: red;
  font-size: 10px;
`;
const ColorChoice = styled.span`
  color: gray;
  font-size: 10px;
`;
