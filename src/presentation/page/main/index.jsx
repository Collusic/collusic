import React from "react";
import styled from "./styled";
import Project from "./Project";

function Main() {
  return (
    <>
      <styled.Header>
        <styled.Title>PROJECTS</styled.Title>
        <styled.Description> hello collusic family </styled.Description>
        <styled.Page>🟠 🟠 🟠 🟠</styled.Page>
      </styled.Header>

      <styled.Section>
        <Project
          profileSrc="Singco"
          userName="Singco"
          title="분위기 굳! 재즈 멜로디"
          genre="Jazz"
          field="intrument"
          mood="groove"
          projectSrc=""
        />
      </styled.Section>
      <styled.CreateProjectButtonText>
        Create Project
      </styled.CreateProjectButtonText>
      <styled.CreateProjectButton />
    </>
  );
}

export default Main;
