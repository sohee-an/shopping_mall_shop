import React from "react";
import styled from "styled-components";
import { moblie } from "../../responsive";
import {
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
  Room,
  Phone,
  Mail,
  LocalPrintshop,
  PermPhoneMsg,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>A.S.O</Logo>
        <Desc></Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          위치:강남구 신사동
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          전화:02-0000-0000
        </ContactItem>
        <ContactItem>
          <LocalPrintshop style={{ marginRight: "10px" }} /> 팩스 02-0000-0000
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          이메일:ansoso634@gmail.com
        </ContactItem>
        <ContactItem>
          <PermPhoneMsg style={{ marginRight: "10px" }} /> 상담번호
          :02-0000-0000 <br />
          (평일 오전 9시부터 오후6시까지 상담가능합니다.)
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  display: flex;
  ${moblie({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.h1`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${moblie({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${moblie({ backgroundColor: "lightgray" })}
`;
const ContactItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
