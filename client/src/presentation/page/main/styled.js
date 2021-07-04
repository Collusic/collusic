import styled, { keyframes } from "styled-components";
import {
  ElementDistanceEachOthers,
  ElementSizeByHeight,
  FontSize,
} from "utils/style/size";
import Color from "utils/style/color";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM};
  padding: ${ElementDistanceEachOthers.LARGE} 0;
  font-family: "Krona One", sans-serif;
  font-size: 40px;
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${FontSize.MEDIUM_SMALL};
  font-weight: 700;
  color: #505050;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 3rem;
  padding: 40px;
  font-size: ${FontSize.EXTRA_SMALL};
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  margin: 20px 0;
  padding: 40px 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: ${ElementSizeByHeight.MEDIUM};
  padding: ${ElementDistanceEachOthers.LARGE} 0
    ${ElementDistanceEachOthers.MEDIUM};
  font-family: "Krona One", sans-serif;
  font-size: ${FontSize.EXTRA_LARGE};
  text-align: center;
  color: ${Color.MAIN_COLOR};
`;

const ProjectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 18rem;
  height: 14rem;
  margin: 10px 10px 10px 10px;
  padding: 40px 40px 16px;
  border-radius: 10px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

const ProjectProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10rem;
  height: ${ElementSizeByHeight.SMALL};
  font-size: ${FontSize.SMALL_MEDIUM};
  font-weight: 600;
  font-family: NotoSansKR;
  color: #202020;
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10rem;
  height: ${ElementSizeByHeight.MEDIUM_SMALL};
  padding: 20px 0 0 0;
  font-size: ${FontSize.MEDIUM};
  font-weight: 600;
  font-family: NotoSansKR;
  color: #202020;
`;

const ProjectField = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  height: ${ElementSizeByHeight.TWO_EXTRA_SMALL};
  padding: 0 0 20px 0;
  font-size: ${FontSize.MEDIUM_SMALL};
  font-weight: 500;
  font-family: NotoSansKR;
  color: #c1c1c1;
`;

const animate = keyframes`
  from {
    width: 90px;
  }
  to {
    width: 350px;
  }
`;

const animateBefore = keyframes`
  from {
    width: 350px;
  }
  to {
    width: 90px;
  }
`;

const CreateProjectButtonText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90px;
  padding: 0 0 0 20px;
  position: absolute;
  right: 90px;
  bottom: 90px;
  height: 80px;
  font-family: "Krona One", sans-serif;
  font-size: ${FontSize.MEDIUM};
  color: #202020;
  border-radius: 40px;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  z-index: 1;

  &:hover::before {
    animation: ${animateBefore} 1s forwards;
  }
`;

const CreateProjectButton = styled.div`
  position: absolute;
  right: 72px;
  bottom: 72px;
  width: 120px;
  height: 120px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
  background-color: #ed8c1b;
  z-index: 2;
  &:hover ${CreateProjectButtonText} {
    background: #012012;
  }
`;

export {
  Header,
  Description,
  Page,
  Section,
  Title,
  ProjectBox,
  Project,
  ProjectProfile,
  ProjectTitle,
  ProjectField,
  CreateProjectButton,
  CreateProjectButtonText,
};
