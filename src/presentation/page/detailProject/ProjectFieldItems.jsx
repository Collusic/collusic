import React, { useState, useEffect } from "react";
import API from "data/http/axios/api";
import styled from "./styled";

function ProjectFieldItems({ projects }) {
  console.log(`project${projects}`);
  return (
    <>
      {projects.music_field === true ? (
        <styled.RequestFieldItem>멜로디</styled.RequestFieldItem>
      ) : undefined}
      {projects.music_field === true ? (
        <styled.RequestFieldItem>악기</styled.RequestFieldItem>
      ) : undefined}
      {projects.music_field === true ? (
        <styled.RequestFieldItem>가사</styled.RequestFieldItem>
      ) : undefined}
    </>
  );
}

export default ProjectFieldItems;
