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
  align-items: center;
  justify-content: center;
  width: 58vw;
  height: 90vh;
  background-color: #fafafa;
`;

const LeftAlign = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 58vw;
  height: 20px;
  padding: ${(props) => props.padding || "4 0 0 8vw"};
`;

const FieldTitle = styled.div`
  width: 100px;
  height: 20px;
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -1px;
  text-align: left;
  color: ${Color.TEXT_MAIN_COLOR};
`;

const FieldBox = styled.div`
  display: flex;
  justify-content: flex-start;
  aign-items: center;
  margin: 0 5px;
  & > #highlight {
    color: orange;
    border-color: orange;
  }
`;

const InputField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  margin: 0 8px;
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: center;
  border-radius: 20px;
  border: solid 2px ${Color.TEXT_SUB_COLOR};
  color: ${(props) => props.color || Color.TEXT_SUB_COLOR};
  background-color: #ffffff;
`;

const ContextTitle = styled.div`
  width: 100px;
  height: 20px;
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -1px;
  text-align: left;
  color: ${Color.TEXT_MAIN_COLOR};
`;

const InputContext = styled.input`
  width: 40vw;
  height: 15vh;
  margin: 20px 20px 0 20px;
  border-radius: 20px;
  border: solid 2px #909090;
  background-color: #ffffff;
`;

const LyricsTitle = styled.div`
  width: 100px;
  height: 20px;
  padding: 20px 20px 10px 20px;
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -1px;
  text-align: left;
  color: ${Color.TEXT_MAIN_COLOR};
`;
const InputLyrics = styled.input`
  width: 40vw;
  height: 18vh;
  margin: 20px;
  border-radius: 20px;
  border: solid 2px #909090;
  background-color: #ffffff;
`;

const MidiTitle = styled.div`
  width: 150px;
  height: 20px;
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -1px;
  text-align: left;
  color: ${Color.TEXT_MAIN_COLOR};
`;
const UploadMidi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 7vh;
  border-radius: 20px;
  border: solid 2px #909090;
  background-color: #ffffff;
`;

const InputMidi = styled.input`
  width: 2vw;
  height: 5vh;
  border: none;
  background-color: #ffffff;
  opacity: 0;
`;
const PlaceHolder = styled.div`
  display: flex;
  align-items: center;
  width: 45vw;
  height: 5vh;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: ${Color.TEXT_SUB_COLOR};
`;

const UploadButton = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 60px;
  border-radius: 30px;
  background-color: ${Color.MAIN_COLOR};
  margin-top: 20px;
  color: #ffffff;
`;

export default {
  Window,
  LeftBox,
  LeftAlign,
  FieldTitle,
  FieldBox,
  InputField,
  ContextTitle,
  InputContext,
  LyricsTitle,
  InputLyrics,
  MidiTitle,
  UploadMidi,
  InputMidi,
  PlaceHolder,
  UploadButton,
  CreateButton,
};
