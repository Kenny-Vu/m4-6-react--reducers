import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";

import { BookingContext } from "./BookingContext";

const PurchaseModal = () => {
  const {
    state,
    actions: { handleCancelSeat },
  } = React.useContext(BookingContext);

  const selectedSeatId = state.selectedSeatId;
  const seatPrice = state.price;

  return (
    <Dialog open={selectedSeatId !== null ? true : false}>
      <DialogTitle>User Form</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill out form</DialogContentText>
        <DialogContentText>Seat chosen: {selectedSeatId}</DialogContentText>
        <DialogContentText>Price: {seatPrice}$</DialogContentText>

        <TextField />
      </DialogContent>
      <DialogActions>
        <Button>Submit</Button>
        <Button onClick={handleCancelSeat}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseModal;
