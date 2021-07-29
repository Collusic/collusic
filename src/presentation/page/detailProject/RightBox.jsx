import React, { useState, useEffect } from "react";
import API from "data/http/axios/api";
import styled from "./styled";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Icon } from "@iconify/react";
import playCircle from "@iconify-icons/mdi/play-circle";
import pauseCircle from "@iconify-icons/mdi/pause-circle";
import ProjectFieldItems from "./ProjectFieldItems";
import imgProfile from "assets/profile.png";
import Color from "utils/style/color";

function RightBox({ id }) {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readRequestProject = async () => {
      try {
        setError(null);
        setProjects(null);
        setLoading(true);
        const {
          data: { project },
        } = await API.get("/requestprojects/" + id + "/comments");
        setProjects(project);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    readRequestProject();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!projects) return null;

  console.log(projects);
  return (
    <styled.RightBox>
      <styled.Title>{projects.title}</styled.Title>
      {projects.audioFile ? (
        <AudioPlayer
          style={{
            position: "absolute",
            right: "4.5vw",
            top: "200px",
            width: "1000px",
            display: "flex",
            justifyContent: "flex-start",
            boxShadow: "none",
            padding: "0 120px 30px 0",
          }}
          src={projects.audioFile}
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
      ) : undefined}{" "}
      {projects.lyrics_text ? (
        <styled.RequestLyric>{projects.lyrics_text}</styled.RequestLyric>
      ) : undefined}
      <styled.ProjectStates>
        <styled.RequestField>
          <styled.RequestFieldTitle>요청 분야</styled.RequestFieldTitle>
          <styled.RequestFieldItems>
            <ProjectFieldItems projects={projects}></ProjectFieldItems>
          </styled.RequestFieldItems>
        </styled.RequestField>
        <styled.RequestGenre>
          <styled.RequestGenreTitle>장르</styled.RequestGenreTitle>
          <styled.RequestGenreItems>{projects.genre}</styled.RequestGenreItems>
        </styled.RequestGenre>
        <styled.RequestMood>
          <styled.RequestMoodTitle>분위기</styled.RequestMoodTitle>
          <styled.RequestMoodItems>{projects.mood}</styled.RequestMoodItems>
        </styled.RequestMood>
      </styled.ProjectStates>
      <styled.RequestText>{projects.description}</styled.RequestText>
      <styled.LineBox>
        <styled.Line></styled.Line>
      </styled.LineBox>
      <styled.RequestProfile>
        <styled.ProfileImage src={imgProfile}></styled.ProfileImage>
        <styled.RequestContext>
          <styled.RequestEmail>{projects.User.email}</styled.RequestEmail>
          <styled.RequestIntroduce>
            {projects.User.introduce}
          </styled.RequestIntroduce>
        </styled.RequestContext>
      </styled.RequestProfile>
    </styled.RightBox>
  );
}

export default RightBox;
