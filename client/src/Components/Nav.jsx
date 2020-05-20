import React, { useState } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

//f55d71

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f2f2f2;
`;

const StyledLinks = styled(Link)`
  text-decoration: none;
  color: #f55d71;
`;
function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar
        position="static"
        color="secondary"
        style={{ background: "#f55d71" }}
      >
        <Toolbar>
          <Typography variant="h4">
            <StyledLink to="/">Wild Circus</StyledLink>
          </Typography>

          <Grid container justify="flex-end" xs>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <StyledLinks to="/" onClick={handleClose}>
                    Home
                  </StyledLinks>
                </MenuItem>
                <MenuItem>
                  <StyledLinks to="/booking" onClick={handleClose}>
                    Booking
                  </StyledLinks>
                </MenuItem>
                <MenuItem>
                  <StyledLinks to="/admin" onClick={handleClose}>
                    Admin
                  </StyledLinks>
                </MenuItem>
              </Menu>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
