import React, { useState } from "react";
import styled from "./styled";
import Project from "./Project";

function Main() {
  const [isLong, setIsLong] = useState(false);

  const mouseOverHandler = (event) => {
    setIsLong(true);
  };
  const mouseOutHandler = (event) => {
    setIsLong(false);
  };

  return (
    <>
      <styled.Header>
        <styled.Title>PROJECTS</styled.Title>
        <styled.Description> hello collusic family </styled.Description>
        <styled.Page>🟠 🟠 🟠 🟠</styled.Page>
      </styled.Header>
      <styled.Section>
        <Project />
      </styled.Section>
      <styled.CreateProject>
        <styled.CreateProjectButton
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        />
        <styled.CreateProjectButtonText isLong={isLong}>
          Create Project
        </styled.CreateProjectButtonText>
      </styled.CreateProject>
    </>
  );
}

export default Main;
