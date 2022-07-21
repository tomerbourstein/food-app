import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Navigation = (props) => {
  

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
            Your Cart <Badge bg="danger"> {props.cookieCount} </Badge>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
