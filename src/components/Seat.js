import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

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
  //renders the seat color depending on availability
  const isDisabled = status === "unavailable" ? true : false;
  //Tippy's text bubble and arrow not appearing. Need fixing.
  return (
    <Tippy content={`${seatId} - ${price}$`}>
      <Button disabled={isDisabled}>
        <img src={seatImgSrc} style={{ width, height }} />
      </Button>
    </Tippy>
  );
};

const Button = styled.button`
  border: none;
  &&:disabled {
    filter: grayscale(100%);
  }
`;
export default Seat;
