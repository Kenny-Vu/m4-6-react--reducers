import React from "react";
import styled from "styled-components";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";
import { SeatContext } from "./SeatContext";
import Loading from "./Loading";
import Seat from "./Seat";
import PurchaseModal from "./PurchaseModal";

const TicketWidget = () => {
  // TODO: use values from Context
  const {
    state: { seatsPerRow, numOfRows, bookedSeats, seats },
  } = React.useContext(SeatContext);

  // TODO: implement the loading spinner <CircularProgress />
  // with the hasLoaded flag

  return (
    <Wrapper>
      {seatsPerRow ? (
        range(numOfRows).map((rowIndex) => {
          const rowName = getRowName(rowIndex);

          return (
            <Row key={rowIndex}>
              <RowLabel>Row {rowName}</RowLabel>
              {range(seatsPerRow).map((seatIndex) => {
                const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
                const seat = seats[`${seatId}`];
                return (
                  <SeatWrapper key={seatId}>
                    <Seat
                      rowIndex={rowIndex}
                      seatIndex={seatIndex}
                      width={36}
                      height={36}
                      bookedSeats={bookedSeats}
                      seatId={seatId}
                      seats={seats}
                      price={seat.price}
                      status={seat.isBooked ? "unavailable" : "available"}
                    />
                  </SeatWrapper>
                );
              })}
            </Row>
          );
        })
      ) : (
        <Loading />
      )}
      <PurchaseModal />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
