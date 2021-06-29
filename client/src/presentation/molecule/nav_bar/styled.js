import styled from "styled-components";
import {
  ElementSizeByHeight,
  ElementDistanceEachOthers,
  FontSize,
} from "/utils/style/size";
import { Color } from "utils/style/color";

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: ${ElementSizeByHeight.MEDIUM_MEDIUM_LARGE};
  background-color: ${Color.MAIN_COLOR};
  padding: ${ElementDistanceEachOthers.SMALL_MEDIUM} 20px;
  box-shadow: 0 1px 3px 2px #00000020;
`;


export default {
  NavBar,
};