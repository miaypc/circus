import React from "react";
import Card from "./Card";
import styled from "styled-components";

const GalleryInfo = [
  {
    name: "Tofu",
    img:
      "https://www.gannett-cdn.com/-mm-/f3480cd08796bf2cb752a83f306e912801b20fe5/c=0-0-2997-1693/local/-/media/2017/10/24/INGroup/LafayetteIN/636444527272217998-IMG-0577.JPG?width=1600&height=800&fit=crop",
    description: " I am a Corgi",
  },
  {
    name: "Red Bean",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb2RWIUJWaRGnKKq_eASbmv0UXc_H7js4ygQ4B5HjCcG-E358-&usqp=CAU",
    description: "Hi, I am a Cat ",
  },
  {
    name: "Molly",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-anAA6HSYlZ8tooj81GohqwxhDxXFXm2KuGwjFtYnxZIG7xGj&usqp=CAU",
    description: "Hey, I am a Collie.",
  },
];

const CardDiv = styled.div`
  justify-content: space-around;
  display: flex;
`;
const H1 = styled.h1`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
`;
function Artists() {
  return (
    <div>
      <H1 style={{ color: "#f55d71", marginTop: "2em", textAlign: "center" }}>
        Our Artists
      </H1>
      <CardDiv>
        {GalleryInfo.map((e) => {
          return (
            <Card description={e.description} name={e.name} image={e.img} />
          );
        })}
      </CardDiv>
    </div>
  );
}
export default Artists;
