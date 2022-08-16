import React from "react";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Navigation = (props) => {
  const cookieCount = useSelector((state) => state.cart.totalAmount);

  return (
    <Navbar fixed="top" bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home">Kuperman</Navbar.Brand>
        <Nav className="justify-content-end">
          <Button
            onClick={props.handleButtonClick}
            className="px-4 py-2"
            variant="secondary"
            size="sm"
          >
            {" "}
            Your Cart <Badge bg="danger"> {cookieCount} </Badge>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
