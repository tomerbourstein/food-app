import React from "react";
import classes from "./MainCard.module.css";
import CookieList from "./CookieList";
import CardGroup from "react-bootstrap/CardGroup";

const MainCard = (props) => {
  return (
      <section  className={classes.mainCard}>
      <a href="" className={classes.anchor} id="main">{""}</a>
        <CardGroup className={classes.cardGroup}>
          <CookieList cookies={props.cookiesLeft} />
        </CardGroup>
      </section>
  );
};

export default MainCard;
