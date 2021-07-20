import React from "react";
import { StyledNavBar, Title, Box, Alarm, Profile } from "./styled";
import imgAlarm from "assets/alarm_3x.png";
import imgProfile from "assets/profile_3x.png";
import useLastLocationHistory from "lib/history";

function NavBar() {
  const setHistory = useLastLocationHistory();

  return (
    <StyledNavBar>
      <Title>collusic</Title>
      <Box>
        <Alarm src={imgAlarm} />
        <Profile
          src={imgProfile}
          onClick={() => {
            setHistory("/mypage");
          }}
        />
      </Box>
    </StyledNavBar>
  );
}

export default NavBar;
