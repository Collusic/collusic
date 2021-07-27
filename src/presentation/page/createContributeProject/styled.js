import styled from "styled-components";

const Window = styled.div`
  display: flex;
  width: 100vw;
  height: 88vh;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 58vw;
  height: 88vh;
  background-color: #fafafa;
`;

const InputContext = styled.input`
  width: 50vw;
  height: 10vh;
  border-radius: 20px;
  border: solid 2px #909090;
  background-color: #ffffff;
`;

const InputLyrics = styled.input`
  width: 50vw;
  height: 12vh;
  border-radius: 20px;
  border: solid 2px #909090;
  background-color: #ffffff;
`;

export default {
  Window,
  LeftBox,
  InputContext,
  InputLyrics,
};
