import React from "react";
import classes from "./CookieList.module.css";
// import AmountButton from "./AmountButton";
import Cookie from "./Cookie";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";

const CookieList = (props) => {
  return (
    <Card className={classes.cardBody} border="light" bg="transparent">
      <CardHeader as="h4">Select da Cookie!</CardHeader>
      <ListGroup variant="flush">
        {props.cookies.map((cookie) => (
          <Cookie
            key={Math.random()}
            type={cookie.type}
            description={cookie.description}
            price={cookie.price}
            name={cookie.type}
            addCookieHandler={props.addCookieHandler}
          />
        ))}
      </ListGroup>
    </Card>
  );
};

export default CookieList;
