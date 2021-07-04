import React from "react";
import { StyledNavBar, Title, Box, Alarm, Profile } from "./styled";

function NavBar() {
  return (
    <StyledNavBar>
      <Title>collusic</Title>
      <Box>
        <Alarm>🔔</Alarm>
        <Profile>👨‍🎓</Profile>
      </Box>
    </StyledNavBar>
  );
}

export default NavBar;
