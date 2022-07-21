import React from "react";
import classes from "./Background.module.css";
import Pastry from "./chocolate-chip4800800.jpg";

import Message from "./Message";
const Background = (props) => {
  return (
    <div className={classes.box}>
      <img
        className={classes.image}
        src={Pastry}
        alt="strawberry-pastry-background"
      ></img>
      <Message className={classes.message}/>
    </div>
  );
};

export default Background;
