import React from "react";
import styled from "styled-components";

import _TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import _Button from "@material-ui/core/Button";

const TextField = styled(_TextField)`
  margin-bottom: 2em;
  margin-right: 2em;
`;

const Button = styled(_Button)`
  margin-top: 2em;
`;

function BookingForm({
  name,
  handleChangeName,
  handleChangeGallery,
  handleSubmit,
  gallery,
  handleChangeNumberOfTickets,
  numberOfTickets,
  gallerys,
}) {
  return (
    <form>
      <TextField
        id="standard-basic"
        label="Name"
        value={name}
        onChange={handleChangeName}
      />
      <TextField
        id="standard-basic"
        label="Number of Tickets"
        value={numberOfTickets}
        onChange={handleChangeNumberOfTickets}
      />
      <TextField
        select
        fullWidth
        id="standard-select-type"
        label="Choose the Gallery"
        value={gallery}
        onChange={handleChangeGallery}
      >
        {gallerys.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <Button
        style={{ color: "#f55d71" }}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
}

export default BookingForm;
