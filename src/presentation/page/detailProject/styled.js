import styled from "styled-components";
import Color from "utils/style/color";

const Window = styled.div`
  display: flex;
  width: 100vw;
  height: 88vh;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 88vh;
  background-color: #fafafa;
`;

const LeftHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 45vw;
  height: 60px;
  padding: 70px 50px 50px 160px;
`;

const HeaderName = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 25px;
  color: ${Color.MAIN_COLOR};
  font-family: "Krona One";
  font-size: 20px;
`;

const ContributeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 40px;
  border: none;
  border-radius: 25px;
  color: #ffffff;
  background-color: ${Color.MAIN_COLOR};
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 45vw;
  height: 40px;
  padding: 20px 50px 20px 160px;
`;

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 500px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
`;

const Email = styled.div`
  width: 161px;
  height: 20px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: ${Color.TEXT_MAIN_COLOR};
`;

const Genre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: ${Color.TEXT_MAIN_COLOR};
`;

const LikeButton = styled.img`
  width: 32px;
  height: 32px;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 88vh;
`;

export default {
  Window,
  LeftBox,
  LeftHeader,
  HeaderName,
  ContributeButton,
  ProjectList,
  Project,
  Profile,
  Email,
  Genre,
  LikeButton,
  RightBox,
};
