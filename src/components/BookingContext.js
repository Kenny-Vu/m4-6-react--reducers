import React from "react";

export const BookingContext = React.createContext();

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

const reducer = (state, action) => {
  console.log(action);
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
        ...state,
        status: "awaiting-response",
      };
    }
    case "receive-confirmation": {
      return {
        ...state,
        status: "purchased",
      };
    }
    case "receive-error": {
      return {
        ...state,
        status: "error",
        error: true,
      };
    }
    case "cancel-choice":
      return initialState;
    default:
      return state;
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

  const handleCancelSeat = () => {
    dispatch({ type: "cancel-choice" });
  };

  return (
    <BookingContext.Provider
      value={{ state, actions: { handleSeatSelection, handleCancelSeat } }}
    >
      {children}
    </BookingContext.Provider>
  );
};
