import React from "react";
import { StyledNavBar, Title, Box, Alarm, Profile } from "./styled";
import imgAlarm from "assets/alarm_3x.png";
import imgProfile from "assets/profile_3x.png";

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
