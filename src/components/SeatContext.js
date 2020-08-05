import React from "react";

export const SeatContext = React.createContext();

const initialState = {
  hasLoaded: false,
  seats: null,
  numOfRows: 0,
  seatsPerRow: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "receive-seat-info-from-server":
      //creating new object with updated seat availabilities using action.bookedSeats
      let updatedSeats = {};
      Object.keys(action.seats).forEach((id) => {
        let seatPrice = action.seats[`${id}`].price;
        let bookingStatus = action.bookedSeats[`${id}`] ? true : false;
        updatedSeats[`${id}`] = { price: seatPrice, isBooked: bookingStatus };
      });
      return {
        hasLoaded: true,
        seats: updatedSeats,
        numOfRows: action.numOfRows,
        seatsPerRow: action.seatsPerRow,
        bookedSeats: action.bookedSeats,
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}

export const SeatProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const receiveSeatInfoFromServer = (data) => {
    dispatch({ type: "receive-seat-info-from-server", ...data });
  };

  return (
    <SeatContext.Provider
      value={{ state, actions: { receiveSeatInfoFromServer } }}
    >
      {children}
    </SeatContext.Provider>
  );
};
