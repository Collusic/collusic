import React, { useState, useEffect } from "react";
import styled from "./styled";
import axios from "axios";

function Project(props) {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);

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

  const handleChangeIndexUp = () => {
    setPage(page + 1);
    setStart(start + 4);
    setEnd(end + 4);
  };

  const handleChangeIndexDown = () => {
    if (start === 0) return;
    setPage(page - 1);
    setStart(start - 4);
    setEnd(end - 4);
  };

  return (
    <>
      {projects.map((project) => (
        <styled.ProjectBox>
          <styled.Project>
            <styled.ProjectProfile key={project.id}>
              👨‍🎓 {project.username}
            </styled.ProjectProfile>
            <styled.ProjectTitle>{project.email}</styled.ProjectTitle>
            <styled.ProjectField>
              {project.address.geo.lat} | {project.address.geo.lng} |{" "}
              {project.company.name}
            </styled.ProjectField>
          </styled.Project>
        </styled.ProjectBox>
      ))}
    </>
  );
}

export default Project;
