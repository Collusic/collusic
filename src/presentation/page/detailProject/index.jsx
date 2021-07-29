import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "./styled";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function DetailProject() {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <styled.Window>
        <LeftBox id={id}></LeftBox>
        <RightBox id={id}></RightBox>
      </styled.Window>
    </>
  );
}

export default DetailProject;
