import React from "react";
import styled from "./styled";
import LeftBox from "./LeftBox";
import RightBox from "../detailProject/RightBox";
import { useParams } from "react-router";

function CreateContributeProject() {
  let { id } = useParams();
  return (
    <styled.Window>
      <LeftBox id={id}></LeftBox>
      <RightBox id={id}></RightBox>
    </styled.Window>
  );
}

export default CreateContributeProject;
