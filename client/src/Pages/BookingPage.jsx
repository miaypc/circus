import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import BookingForm from "../Components/BookingForm";
import Gallery from "../Components/Gallery";

const gallerys = [
  {
    value: "Mollys Gallery",
  },
  {
    value: "Red Beans Gallery",
  },
  {
    value: "Tofus Gallery",
  },
];

const BookingTitle = styled.h2`
  margin-top: 4em;
  margin-bottom: 2em;
  text-align: center;
`;

function BookingPage() {
  const [name, setName] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState("");
  const [error, setError] = useState("");
  const [gallery, setGallery] = useState("Mollys Gallery");

  const handleChangeGallery = (event) => {
    console.log("ChangeGallery", event);
    setGallery(event.target.value);
  };
  const handleChangeName = (event) => {
    console.log("ChangeName", event);
    setName(event.target.value);
  };
  const handleChangeNumberOfTickets = (event) => {
    console.log("Change number of tickets", event);
    setNumberOfTickets(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit!!!!", event);
    fetch("/booking", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        name: name,
        numberOfTickets: numberOfTickets,
        gallery: gallery,
      }),
    })
      .then(() => {
        setName("");
        setGallery("");
        setNumberOfTickets("");
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  return (
    <div>
      <Nav />
      <BookingTitle style={{ color: "#f55d71" }}>
        Book Your Tickets
      </BookingTitle>
      <BookingForm
        handleSubmit={handleSubmit}
        name={name}
        handleChangeNumberOfTickets={handleChangeNumberOfTickets}
        numberOfTickets={numberOfTickets}
        gallery={gallery}
        handleChangeName={handleChangeName}
        handleChangeGallery={handleChangeGallery}
        gallerys={gallerys}
      />
      <BookingTitle style={{ color: "#f55d71" }}>Our Gallery</BookingTitle>
      <Gallery />
      <Footer />
    </div>
  );
}

export default BookingPage;
