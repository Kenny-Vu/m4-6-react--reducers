import React from "react";
import styled from "styled-components";

import seatImgSrc from "../assets/seat-available.svg";

const Seat = ({ bookedSeats, seatId }) => {
  let svgColor = bookedSeats[`${seatId}`] && { filter: "grayscale(100%)" };
  return (
    <div>
      <img src={seatImgSrc} style={svgColor} />
    </div>
  );
};

const Wrapper = styled.div``;

export default Seat;
