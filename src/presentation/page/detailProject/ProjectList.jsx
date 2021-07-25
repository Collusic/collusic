import React, { useState, useEffect } from "react";
import styled from "./styled";
import axios from "axios";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import profileImage from "assets/profile.png";
import audio from "assets/전상근_내방.mp3";
import isSelectedImage from "assets/unselected.png";
import playImage from "assets/play.png";
import pauseImage from "assets/pause.png";

function ProjectList() {
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
    <styled.ProjectList>
      {projects.map((project) => (
        <styled.Project>
          <styled.Profile src={profileImage}></styled.Profile>
          <styled.Email>${project.email}</styled.Email>
          <styled.Genre>{project.company.name}</styled.Genre>
          <AudioPlayer
            style={{
              width: "400px",
            }}
            src={audio}
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            defaultCurrentTime="Loading"
            defaultDuration="Loading"
            customIcons={{
              play: { playImage },
              pause: { pauseImage },
            }}
          ></AudioPlayer>
        </styled.Project>
      ))}
    </styled.ProjectList>
  );
}

export default ProjectList;
