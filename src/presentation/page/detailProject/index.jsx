import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "./styled";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function DetailProject() {
  let { id } = useParams();
  return (
    <>
      <styled.Window>
        <LeftBox></LeftBox>
        <RightBox></RightBox>
      </styled.Window>
    </>
  );
}

export default DetailProject;
