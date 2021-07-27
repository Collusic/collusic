import React from "react";
import styled from "./styled";
import ProjectList from "./ProjectList";

function DetailProject() {
  return (
    <>
      <styled.Window>
        <styled.LeftBox>
          <styled.LeftHeader>
            <styled.HeaderName>Track list</styled.HeaderName>
            <styled.ContributeButton>기여하기</styled.ContributeButton>
          </styled.LeftHeader>
          <ProjectList></ProjectList>
        </styled.LeftBox>
        <styled.RightBox>
          <styled.Title>The Great Escape</styled.Title>
          <styled.ProjectStates>
            <styled.RequestField>
              <styled.RequestFieldTitle>요청 분야</styled.RequestFieldTitle>
              <styled.RequestFieldItems></styled.RequestFieldItems>
            </styled.RequestField>
            <styled.RequestGenre>
              <styled.RequestGenreTitle>장르</styled.RequestGenreTitle>
              <styled.RequestGenreItems></styled.RequestGenreItems>
            </styled.RequestGenre>
            <styled.RequestMood>
              <styled.RequestMoodTitle>분위기</styled.RequestMoodTitle>
              <styled.RequestMoodItems></styled.RequestMoodItems>
            </styled.RequestMood>
          </styled.ProjectStates>
          <styled.RequestText>
            [최대300자] 이 앨범은 비슷한 주제로 이루어진 일종의 컨셉앨범이라고
            합니다. 외로움(Loneliness)과 무관심함(Detachment)이 주된 내용이라고
            해요. 또 대부분의 가사는 작사를 맡은 프런트맨 데이먼 알반 자신에
            대해 이야기하고 있다고 합니다. 데이먼은 엘라스티카(Elastica)의
            저스틴 프리슈먼과 오랜 시간 연인으로 지내왔는데요, 앨범을 녹음하던
            1994년 무렵에는 엘라스티카가 미국에서 크게 성공해 서로 함께하는
            시간이 많지 않았다고 합니다. 그러한 데이먼의 외로운 감정이 많은
            곡들에서 드러나곤 해요.
          </styled.RequestText>
        </styled.RightBox>
      </styled.Window>
    </>
  );
}

export default DetailProject;
