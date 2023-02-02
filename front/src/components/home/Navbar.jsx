import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { moblie } from "../../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { getAllCartAction } from "../../redux/actions/cart";

import { logOut } from "../../redux/userRedux";
import { logOutCartAction } from "../../redux/cartRedux";

const Navbar = () => {
  const [loginUser, setLoginUser] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  console.log("qu", quantity);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      setLoginUser(true);
      dispatch(getAllCartAction(user?._id));
      // } else {
      //   setLoginUser(null);
      //   navigate("/");

      //   // <Navigate replace to="/" />;
    }
  }, [user, loginUser, quantity]);

  const onClickLogOut = useCallback(() => {
    dispatch(logOut());
    dispatch(logOutCartAction());
    setLoginUser(false);
    navigate("/");
  }, []);

  const onClick = useCallback(() => {
    user === null && navigate("/login");
  }, [user]);

  const onClickHome = useCallback(() => {
    navigate("/");
  });

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={onClickHome}>A.S.O</Logo>
        </Center>
        <Right>
          {loginUser ? (
            <>
              <MenuItem>
                <strong>{loginUser?.username}</strong>
              </MenuItem>
              <MenuItem onClick={onClickLogOut}>LOG OUT</MenuItem>
            </>
          ) : (
            <>
              <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>LOGIN</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge onClick={onClick} badgeContent={quantity} color="primary">
                <ShoppingCart color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  height: 60px;
  ${moblie({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${moblie({ padding: "10px 0" })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${moblie({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${moblie({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  ${moblie({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-left: 25px;
  ${moblie({ flex: 2, justifyContent: "center", marginLeft: "10px" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
  ${moblie({ fontSize: "12px" })}
  text-decoration: none;
  color: black;
`;
