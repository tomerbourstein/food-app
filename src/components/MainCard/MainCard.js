import React from "react";
import classes from "./MainCard.module.css";

import CookieList from "./CookieList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainCard = (props) => {
  return (
    <Container fluid className={classes.zIndex}>
      <Row className={classes.centerCol}>
        <Col className={classes.marginRight}>
          <CookieList cookies={props.cookiesLeft} addCookieHandler={props.addCookieHandler}/>
        </Col>

        <Col className={classes.marginLeft}>
          <CookieList cookies={props.cookiesRight} addCookieHandler={props.addCookieHandler}/>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCard;
