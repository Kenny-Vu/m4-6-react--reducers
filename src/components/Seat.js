import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { BookingContext } from "./BookingContext";

import seatImgSrc from "../assets/seat-available.svg";

const Seat = ({
  rowIndex,
  seatIndex,
  width,
  height,
  price,
  status,
  bookedSeats,
  seatId,
  seats,
}) => {
  const {
    state,
    actions: { handleSeatSelection },
  } = React.useContext(BookingContext);
  const isDisabled = status === "unavailable" ? true : false;
  return (
    <Tippy content={`${seatId} - ${price}$`}>
      <Button
        onClick={() => {
          handleSeatSelection({ seatId, price });
          console.log(state);
        }}
        disabled={isDisabled}
      >
        <img src={seatImgSrc} style={{ width, height }} />
      </Button>
    </Tippy>
  );
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  &&:disabled {
    filter: grayscale(100%);
  }
`;
export default Seat;
