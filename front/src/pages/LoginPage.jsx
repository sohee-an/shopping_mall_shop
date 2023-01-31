import React, { useState } from "react";
import styled from "styled-components";
import { moblie } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, errorMessage } = useSelector(
    (state) => state.user
  );
  const user = useSelector((state) => state.user.currentUser);

  const onSubmit = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
  };
  user && navigate("/");
  const onClick = () => {
    console.log("click");
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={onSubmit}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <Button type="submit">Login</Button>
          {errorMessage && <Error>{errorMessage}</Error>}
          <Link>비밀번호를 잃어버리셨나요?</Link>
          <Link>회원가입 하러 가기</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/premium-photo/girlfriends-going-shopping-concept_53876-86016.jpg?w=1380");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 35%;
  background-color: white;
  ${moblie({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0;
  background-color: teal;
  color: white;
  cursor: pointer;

  &::display {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;
