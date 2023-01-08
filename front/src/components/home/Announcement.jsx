import styled from "styled-components";

const Announcement = () => {
  return <Container>신규 회원 30%할인!! 놓치지 마세요!</Container>;
};

export default Announcement;
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  padding-left: 5px;
  text-align: center;
`;
