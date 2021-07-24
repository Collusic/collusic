import styled from "styled-components";
import Color from "utils/style/color";

const Window = styled.div`
  display: flex;
`;

const LeftBox = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  background-color: #fafafa;
`;

const LeftHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 70px 50px 30px 160px;
`;

const HeaderName = styled.div`
  display: flex;
  justify-content: center;
  width: 109px;
  height: 25px;
  color: ${Color.MAIN_COLOR};
  font-family: "Krona One";
`;

const ContributeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 40px;
  border-radius: 25px;
  color: #ffffff;
  background-color: ${Color.MAIN_COLOR};
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 20px 50px 20px 160px;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
`;

const RightBox = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
`;

export default {
  Window,
  LeftBox,
  LeftHeader,
  HeaderName,
  ContributeButton,
  ProjectList,
  RightBox,
};
