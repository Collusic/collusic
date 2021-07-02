import styled from "styled-components";
import {
  ElementDistanceEachOthers,
  ElementSizeByHeight,
  FontSize,
} from "utils/style/size";
import Color from "utils/style/color";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM};
  padding: ${ElementDistanceEachOthers.MEDIUM} 0;
  font-family: KronaOne;
  font-size: ${FontSize.EXTRA_LARGE};
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85vw;
  height: 50vh;
  padding: 40px 130px 130px 130px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10rem;
  height: ${ElementSizeByHeight.MEDIUM};
  padding: ${ElementDistanceEachOthers.MEDIUM} 0;
  font-family: KronaOne;
  font-size: ${FontSize.EXTRA_LARGE};
  text-align: center;
  color: ${Color.MAIN_COLOR};
`;
const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const Project = styled.div`
  width: 15rem;
  height: 12rem;
  margin: 10px 10px 10px 10px;
  padding: 40px 40px 16px;
  border-radius: 10px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export { Header, Section, Title, ProjectBox, Project };
