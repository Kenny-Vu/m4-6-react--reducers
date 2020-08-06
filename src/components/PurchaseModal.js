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
  const { state } = React.useContext(BookingContext);

  const selectedSeatId = state.selectedSeatId;

  return (
    <Dialog open={selectedSeatId !== null}>
      <DialogTitle>User Form</DialogTitle>
      <DialogContent>
        <DialogContentText>Please fill out form</DialogContentText>
        <TextField />
      </DialogContent>
      <DialogActions>
        <Button>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseModal;
