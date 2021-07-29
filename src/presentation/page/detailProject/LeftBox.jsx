import React from "react";
import styled from "./styled";
import ProjectList from "./ProjectList";
import { useHistory } from "react-router-dom";
import useLastLocationHistory from "lib/history";

function LeftBox({ id }) {
  const setHistory = useLastLocationHistory();
  return (
    <styled.LeftBox>
      <styled.LeftHeader>
        <styled.HeaderName>Track list</styled.HeaderName>
        <styled.ContributeButton
          onClick={() => setHistory("/requestprojects/" + id + "/comments")}
        >
          기여하기
        </styled.ContributeButton>
      </styled.LeftHeader>
      <ProjectList id={id}></ProjectList>
    </styled.LeftBox>
  );
}

export default LeftBox;
