import React, { useState } from "react";
import styled from "./styled";
import Uploadfiles from "./UploadFiles";
import axios from "axios";
import useLastLocationHistory from "lib/history";

function LeftBox({ id }) {
  const [file, setFile] = useState();
  const [content, setContent] = useState("");

  const setHistory = useLastLocationHistory();
  const onChange = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };
  const highlight = (e) => {
    if (e.target.id === "highlight") {
      e.target.id = "";
    } else {
      e.target.id = "highlight";
    }
  };
  const onSubmit = () => {
    let form = new FormData();
    console.log(content);
    form.append("data", file);
    form.append("description", content);
    axios
      .post(
        "http://168.131.157.14:8001/requestprojects/" + id + "/comments",
        form
      )
      .then((response) => {
        console.log(response);
        const { data } = response;
        if (data.success) {
          alert("성공~");
          setHistory("/requestprojects");
        } else {
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <styled.LeftBox>
      <styled.LeftAlign padding={"1vh 0 2vh 18vw"}>
        <styled.FieldTitle>기여 분야</styled.FieldTitle>
      </styled.LeftAlign>
      <styled.LeftAlign padding={"1vh 0 2vh 18vw"}>
        <styled.FieldBox>
          <styled.InputField onClick={highlight}>멜로디</styled.InputField>
          <styled.InputField onClick={highlight}>악기</styled.InputField>
          <styled.InputField onClick={highlight}>가사</styled.InputField>
        </styled.FieldBox>
      </styled.LeftAlign>
      <styled.LeftAlign padding={"1vh 0 0 18vw"}>
        <styled.ContextTitle>기여 내용</styled.ContextTitle>
      </styled.LeftAlign>
      <styled.InputContext
        onChange={onChange}
        placeholder="내용을 입력해 주세요 (최대 150자)"
      ></styled.InputContext>
      <styled.LeftAlign padding={"1vh 0 0 17vw"}>
        <styled.LyricsTitle>가사</styled.LyricsTitle>
      </styled.LeftAlign>
      <styled.InputLyrics placeholder="가사를 입력해 주세요."></styled.InputLyrics>
      <styled.LeftAlign padding={"1vh 0 2vh 18vw"}>
        <styled.MidiTitle>멜로디/악기</styled.MidiTitle>
      </styled.LeftAlign>
      <Uploadfiles file={file} setFile={setFile}></Uploadfiles>
      <styled.CreateButton onClick={onSubmit}>기여하기</styled.CreateButton>
    </styled.LeftBox>
  );
}

export default LeftBox;
