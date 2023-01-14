import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { moblie } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../redux/actions/signup";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
      if (confirmPassword === password) {
        setPasswordError(true);
      }
      // setPasswordError(e.target.value === password);
    },
    [password]
  );

  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector(
    (state) => state.signUp
  );
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();

    passwordError &&
      dispatch(
        signUpAction({
          username: username,
          email: email,
          password: password,
          name: name,
          lastName: lastName,
        })
      );
  };

  currentUser?.data && navigate("/login");

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            onChange={onChangePasswordCheck}
          />
          {error && <Warm>username 또는 email로 된 아이디가 있습니다.</Warm>}
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
          <AgreementContainer>
            <CheckBox type="checkbox"></CheckBox>
            <Agreement>개인정보처리방침의 동의하십니까?</Agreement>
          </AgreementContainer>
          <Button onClick={onClick} disabled={isFetching}>
            CREATE
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
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
const Warm = styled.span`
  color: red;
  font-size: 12px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;
