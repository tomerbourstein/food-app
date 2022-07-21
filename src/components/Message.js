import React from "react";
import classes from "./Message.module.css";

import Alert from "react-bootstrap/Alert";

const Message = (props) => {
  return (
    <Alert className={classes.alertMessage} variant="secondary">
      <h1>Welcome to Pastry!</h1>
      <p>
        Feel free to choose the variaty of pastries our chef made from scratch,
        using the best ingridients from the top suppliers in the country.
      </p>
    </Alert>
  );
};

export default Message;
