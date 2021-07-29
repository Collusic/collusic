import React, { useState, useEffect } from "react";
import styled from "./styled";
import API from "data/http/axios/api";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import profileImage from "assets/profile.png";
import unselected from "assets/unselected.png";
import selected from "assets/selected.png";
import { Icon } from "@iconify/react";
import playCircle from "@iconify-icons/mdi/play-circle";
import pauseCircle from "@iconify-icons/mdi/pause-circle";
import Color from "utils/style/color";

function ProjectList({ id }) {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readContributeProjects = async () => {
      try {
        setError(null);
        setProjects(null);
        setLoading(true);
        const {
          data: { comments },
        } = await API.get("/requestprojects/" + id + "/comments");
        setProjects(comments);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    readContributeProjects();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!projects) return null;

  console.log(projects);

  return (
    <styled.ProjectList>
      {projects.map((project) => (
        <styled.Project>
          <styled.Profile src={profileImage}></styled.Profile>
          <styled.Email>{project.User.email}</styled.Email>
          <styled.Genre>악기</styled.Genre>
          {project.c_audioFile ? (
            <AudioPlayer
              style={{
                width: "600px",
                backgroundColor: "#fafafa",
                boxShadow: "none",
              }}
              src={project.c_audioFile}
              showJumpControls={false}
              customVolumeControls={[]}
              customAdditionalControls={[]}
              defaultCurrentTime="Loading"
              defaultDuration="Loading"
              layout="horizontal-reverse"
              customProgressBarSection={[
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.CURRENT_LEFT_TIME,
              ]}
              customIcons={{
                play: <Icon icon={playCircle} color={Color.MAIN_COLOR} />,
                pause: <Icon icon={pauseCircle} color={Color.MAIN_COLOR} />,
              }}
            ></AudioPlayer>
          ) : undefined}
          {project.lyrics_text ? (
            <styled.Lyric>{project.lyrics_text}</styled.Lyric>
          ) : undefined}
          <styled.LikeButton
            src={!selected ? selected : unselected}
          ></styled.LikeButton>
        </styled.Project>
      ))}
    </styled.ProjectList>
  );
}

export default ProjectList;
