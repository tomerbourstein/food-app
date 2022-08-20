import React, { Fragment } from "react";
import classes from "./MainCard.module.css";
import CookieList from "./CookieList";
import CardGroup from "react-bootstrap/CardGroup";

const MainCard = (props) => {
  return (
    <Fragment>
      <a className={classes.anchor} id="main"></a>
      <section  className={classes.mainCard}>
        <CardGroup>
          <CookieList cookies={props.cookiesLeft} />
        </CardGroup>
        {/* <Container fluid className={classes.zIndex}>
        <Row className={classes.centerCol}>
        <Col className={classes.marginRight}>
        <CookieList cookies={props.cookiesLeft} />
      </Col> */}

        {/* <Col className={classes.marginLeft}>
          <CookieList cookies={props.cookiesRight} />
        </Col> */}
        {/* </Row> */}
        {/* </Container> */}
      </section>
    </Fragment>
  );
};

export default MainCard;
