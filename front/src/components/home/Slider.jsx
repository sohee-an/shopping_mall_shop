import React, { useState } from "react";
import styled from "styled-components";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { sliderItems } from "../../data";
import { moblie } from "../../responsive";
const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(
        sliderIndex > 0 ? sliderIndex - 1 : sliderItems.length - 1
      );
    }
    if (direction === "right") {
      setSliderIndex(
        sliderIndex < sliderItems.length - 1 ? sliderIndex + 1 : 0
      );
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBack />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
                <Image2 src={item.img2} />
              </ImgContainer>

              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForward />
      </Arrow>
    </Container>
  );
};

export default Slider;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: coral;
  position: relative;
  display: flex;
  overflow: hidden;
  ${moblie({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease-in-out;
  transform: translateX(${({ sliderIndex }) => sliderIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: yellow;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.h3`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 50%;
`;
const Image2 = styled.img`
  flex: 1;
  width: 100%;
  height: 50%;
`;
