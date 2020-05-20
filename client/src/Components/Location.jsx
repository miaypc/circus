import React from "react";
import Map from "../Img/Map.png";
import styled from "styled-components";
import _Button from "@material-ui/core/Button";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3em 5em 5em 5em;
  flex-wrap: wrap;
`;

const Button = styled(_Button)`
  color: #f2f2f2;
  padding: 1em 2em 1em 2em;
`;

const ButtonContainer = styled.div`
  padding-top: 6em;
`;

function Location() {
  return (
    <div>
      <h1 style={{ color: "#f55d71", marginTop: "2em", textAlign: "center" }}>
        Find us on Map
      </h1>
      <Div>
        <a href="https://www.google.de/maps/place/Wild+Code+School+Berlin/@52.5521708,13.354686,14.95z/data=!4m5!3m4!1s0x47a853f8fe23d85d:0xd410928c8b9d0f69!8m2!3d52.5533001!4d13.3604992">
          <img src={Map} alt="Map" style={{ maxHeight: "300px" }} />
        </a>
        <ButtonContainer>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.google.de/maps/place/Wild+Code+School+Berlin/@52.5521708,13.354686,14.95z/data=!4m5!3m4!1s0x47a853f8fe23d85d:0xd410928c8b9d0f69!8m2!3d52.5533001!4d13.3604992"
          >
            <Button style={{ background: "#f55d71" }}>Location</Button>
          </a>
        </ButtonContainer>
      </Div>
    </div>
  );
}
export default Location;
