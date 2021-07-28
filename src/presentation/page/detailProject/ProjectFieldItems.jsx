import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "./styled";

function ProjectFieldItems() {
  const [requestProject, setRequestProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setError(null);
        setRequestProject(null);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setRequestProject(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!requestProject) return null;

  return (
    <>
      {/* {requestProject.map((project) => (
        <styled.RequestFieldItem>{project.email}</styled.RequestFieldItem>
      ))} */}
    </>
  );
}

export default ProjectFieldItems;
