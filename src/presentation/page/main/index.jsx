import React, { useState } from "react";
import styled from "./styled";
import Project from "./Project";
import CreateButtonImage from "assets/createButton.svg";
import useLastLocationHistory from "lib/history";

function Main() {
  const setHistory = useLastLocationHistory();

  const [isLong, setIsLong] = useState(false);

  const mouseOverHandler = (event) => {
    setIsLong(true);
  };
  const mouseOutHandler = (event) => {
    setIsLong(false);
  };

  return (
    <>
      <styled.Section>
        <Project />
      </styled.Section>
      <styled.CreateProject>
        <styled.CreateProjectButton
          src={CreateButtonImage}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
          onClick={() => setHistory("/create")}
        />
        <styled.CreateProjectButtonText isLong={isLong}>
          Create Project
        </styled.CreateProjectButtonText>
      </styled.CreateProject>
    </>
  );
}

export default Main;
