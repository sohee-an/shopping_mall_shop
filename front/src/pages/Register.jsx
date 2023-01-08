import React from "react";
import styled from "styled-components";
import { moblie } from "../responsive";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <AgreementContainer>
            <CheckBox type="checkbox"></CheckBox>
            <Agreement>개인정보처리방침의 동의하십니까?</Agreement>
          </AgreementContainer>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&ga=GA1.2.1654460652.1672832495&semt=sph");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${moblie({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const AgreementContainer = styled.div`
  display: flex;
`;
const Agreement = styled.div`
  font-size: 12px;

  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const CheckBox = styled.input`
  margin-right: 5px;
  margin-bottom: 10px;
`;
