import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const ChosenCookie = props => {
    return (
      

      <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{props.enteredCookie.type} {"x" + props.enteredCookie.amount}{" "}</div>
        {props.enteredCookie.description}
      </div>
      <Badge bg="secondary" pill>
      {props.enteredCookie.price + "₪"}
      </Badge>
    </ListGroup.Item>
    )
}

export default ChosenCookie;