import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Container>
      <MessageContainer>
        <ErrorMessage>잘못된 접근입니다 </ErrorMessage>
        <HomeLink>홈으로 가기</HomeLink>
      </MessageContainer>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1efda;
`;
const MessageContainer = styled.div`
  width: 50%;
  min-height: 30%;
  background-color: #fbd992;
  text-align: center;
  border-radius: 10px;
`;
const ErrorMessage = styled.div`
  font-size: 40px;
  margin: 20px;
`;

const HomeLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;
