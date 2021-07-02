import React from "react";
import { Header, Section, Title, ProjectBox, Project } from "./styled";

function Main() {
  return (
    <>
      <Header>
        <Title>PROJECTS</Title>
      </Header>
      <Section>
        <ProjectBox>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </ProjectBox>
      </Section>
    </>
  );
}

export default Main;
