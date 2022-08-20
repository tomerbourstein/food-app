import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../media/ku.svg";
import { ReactComponent as CartIcon } from "../../media/cart.svg";
import Notification from "./Notification";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import classes from "./Navigation.module.css";
const Navigation = (props) => {
  const cookieCount = useSelector((state) => state.cart.totalAmount);

  return (
    <Fragment>
      <Navbar fixed="top" className={classes.bgColor} expand="lg">
        <Container>
          <Nav className="justify-content-end">
            <Button
              onClick={props.handleButtonClick}
              className={classes.btnColor}
              size="sm"
            >
              <Badge bg="danger"> {cookieCount} </Badge> <CartIcon />
            </Button>
          </Nav>
          <Notification />
          <Navbar.Brand href="#home">
            <Logo className={classes.logoSvg} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
