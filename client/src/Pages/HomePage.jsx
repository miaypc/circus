import React from "react";
import Nav from "../Components/Nav";
import styled from "styled-components";
import bg from "../Img/bg.jpg";
import Artists from "../Components/Artists";
import Footer from "../Components/Footer";
import Location from "../Components/Location";

const BackgroundImg = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${bg});
  height: 50vh;
`;

function HomePage() {
  return (
    <div>
      <Nav />
      <BackgroundImg />
      <Artists />
      <Location />
      <Footer />
    </div>
  );
}

export default HomePage;
