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
  font-family: KronaOne;
  font-size: ${FontSize.EXTRA_LARGE};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: ${Color.MAIN_COLOR};
`;

const Alarm = styled.image`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  src: "assets/alarm.png";
  width: 40px;
  height: 40px;
  padding: 0 2px;
  text-align: right;
`;

// const User = styled.img`
//   width: 40px;
//   height: 40px;
//   margin: 1px 0 0 20px;
//   padding: 0 1px;
// `;

export { StyledNavBar, Title, Alarm };
