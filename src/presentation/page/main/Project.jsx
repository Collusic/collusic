import React, { useState, useEffect } from "react";
import styled from "./styled";
import axios from "axios";
import UserImg from "assets/profile.png";
import fieldMelody from "assets/fieldMelody.png";
import fieldInstrument from "assets/fieldInstrument.png";
import fieldLyric from "assets/fieldLyric.png";

// const readRequestProjects = async () => {
//   try {
//     const { data } = await API.get("/req-projects");
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
function Project() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setError(null);
        setProjects(null);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setProjects(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!projects) return null;

  return (
    <>
      {projects.map((project) => (
        <styled.ProjectBox>
          <styled.Project>
            <styled.ProjectUserId key={project.id}>
              <styled.ProjectUserImg src={UserImg}></styled.ProjectUserImg>{" "}
              {project.username}
            </styled.ProjectUserId>
            <styled.ProjectTitle>{project.email}</styled.ProjectTitle>
            <styled.ProjectField>
              {true ? (
                <styled.FieldMelody src={fieldMelody}></styled.FieldMelody>
              ) : null}
              {true ? (
                <styled.FieldInstrument
                  src={fieldInstrument}
                ></styled.FieldInstrument>
              ) : null}
              {true ? (
                <styled.FieldLyric src={fieldLyric}></styled.FieldLyric>
              ) : null}
            </styled.ProjectField>
          </styled.Project>
        </styled.ProjectBox>
      ))}
    </>
  );
}

export default Project;
