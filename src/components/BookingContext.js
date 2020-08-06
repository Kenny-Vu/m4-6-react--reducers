import React from "react";

export const BookingContext = React.createContext();

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "begin-booking-process": {
      return {
        status: "seat-selected",
        error: null,
        selectedSeatId: action.seatId,
        price: action.price,
      };
    }
    case "confirm-choice": {
      return {
        status: "awaiting-response",
        error: null,
        selectedSeatId: action.seatId,
        price: action.price,
      };
    }
    case "receive-confirmation": {
      return {
        status: "purchased",
        error: null,
        selectedSeatId: action.seatId,
        price: action.price,
      };
    }
    default:
      return {
        status: "error",
        error: true,
        selectedSeatId: action.seatId,
        price: action.price,
      };
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //Function for when user selects seat
  const handleSeatSelection = ({ seatId, price }) => {
    dispatch({
      type: "begin-booking-process",
      price,
      seatId,
    });
  };

  return (
    <BookingContext.Provider
      value={{ state, actions: { handleSeatSelection } }}
    >
      {children}
    </BookingContext.Provider>
  );
};
