import React from "react";
import {
  Header,
  Description,
  Section,
  Title,
  ProjectBox,
  Project,
} from "./styled";

function Main() {
  return (
    <>
      <Header>
        <Title>PROJECTS</Title>
        <Description> hello collusic family </Description>
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
