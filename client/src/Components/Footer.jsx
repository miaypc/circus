import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import _BottomNavigation from "@material-ui/core/BottomNavigation";

import _AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const BottomNavigation = styled(_BottomNavigation)`
  padding-top: 1em;
  text-align: center;
  font-size: 15px;
  color: #f0f0f0;
  backgroudcolor: #f0f0f0;
  height: 2em;
`;

function Footer() {
  return (
    <BottomNavigation position="static" style={{ background: "#f55d71" }}>
      <Typography variant="p">Copyright © 2020 Wild Circus </Typography>
    </BottomNavigation>
  );
}

export default Footer;
