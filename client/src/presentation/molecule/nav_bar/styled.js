import styled from "styled-components";
import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize,
} from "utils/style/size";
import Color from "utils/style/color";

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${ElementSizeByHeight.LARGE};
  padding: ${ElementDistanceEachOthers.MEDIUM_SMALL} 0;
  box-shadow: 0 1px 3px 2px #00000020;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  height: ${ElementSizeByHeight.LARGE};
  padding: 0 72px;
  font-family: "Krona One", sans-serif;
  font-size: ${FontSize.LARGE};
  font-weight: normal;
  text-align: left;
  color: ${Color.MAIN_COLOR};
`;
const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20rem;
  height: ${ElementSizeByHeight.LARGE};
  padding: 0 72px;
`;

const Alarm = styled.image`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0 2px;
`;

const Profile = styled.image`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0 2px;
`;

export { StyledNavBar, Title, Box, Alarm, Profile };
