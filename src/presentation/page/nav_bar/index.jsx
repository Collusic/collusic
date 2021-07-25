import React from "react";
import { StyledNavBar, Title, Box, Alarm, Profile } from "./styled";
import imgAlarm from "assets/alarm.png";
import imgProfile from "assets/profile.png";

function NavBar() {
  return (
    <StyledNavBar>
      <Title>collusic</Title>
      <Box>
        <Alarm src={imgAlarm} />
        <Profile src={imgProfile} />
      </Box>
    </StyledNavBar>
  );
}

export default NavBar;
