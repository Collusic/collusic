import React, { useState } from "react";
import styled from "./styled";
import Upload from "./Upload";

function LeftBox() {
  return (
    <styled.LeftBox>
      <styled.InputContext></styled.InputContext>
      <styled.InputLyrics></styled.InputLyrics>
      <styled.UploadMidi>
        <Upload></Upload>
      </styled.UploadMidi>
    </styled.LeftBox>
  );
}

export default LeftBox;
