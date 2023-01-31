import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../requestMethod";
const SuccessPage = () => {
  const { state } = useLocation();
  const [successData, setSuccessData] = useState(false);

  console.log(state);
  // useEffect(() => {
  //   state & setSuccessData(true);
  // });

  return (
    <Container>
      <Wrapper>
        <Title>Successful</Title>
        <Desc>성공적으로 상품이 주문되었습니다.</Desc>
        <LinkWrapper>
          <LinkStyle to="/">홈으로 가기</LinkStyle>
          <LinkStyle to="*">주문내역 보러 가기 </LinkStyle>
        </LinkWrapper>
      </Wrapper>
    </Container>
  );
};

export default SuccessPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0067a3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50%;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #f3e6e6;
`;
const Title = styled.h1`
  color: gray;
  margin: 10px;
`;
const LinkWrapper = styled.div``;

const LinkStyle = styled(Link)`
  color: gray;
  margin-right: 10px;
`;
const Desc = styled.h3`
  color: gray;
  margin-bottom: 30px;
`;
