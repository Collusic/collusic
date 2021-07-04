import React from "react";
import {
  Header,
  Description,
  Page,
  Section,
  Title,
  ProjectBox,
  Project,
  ProjectProfile,
  ProjectTitle,
  ProjectField,
  CreateProjectButton,
  CreateProjectButtonText,
} from "./styled";

function Main() {
  return (
    <>
      <Header>
        <Title>PROJECTS</Title>
        <Description> hello collusic family </Description>
        <Page>🟠 🟠 🟠 🟠</Page>
      </Header>

      <Section>
        <ProjectBox>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
          <Project>
            <ProjectProfile>👨‍🎓 Username</ProjectProfile>
            <ProjectTitle>Project Title</ProjectTitle>
            <ProjectField>Genre | Field | Mood</ProjectField>
          </Project>
        </ProjectBox>
      </Section>
      <CreateProjectButtonText>Create Project</CreateProjectButtonText>
      <CreateProjectButton />
    </>
  );
}

export default Main;
