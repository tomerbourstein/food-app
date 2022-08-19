import React, { Fragment } from "react";
// import classes from "./CookieList.module.css";
import Cookie from "./Cookie";

const CookieList = (props) => {
  return (
    <Fragment>
      {/* <Card className={classes.cardBody} border="light" bg="transparent">
      <CardHeader as="h4">Select da Cookie!</CardHeader>
      <ListGroup variant="flush"> */}
      {props.cookies.map((cookie) => (
        <Cookie
          key={Math.random()}
          type={cookie.type}
          description={cookie.description}
          price={cookie.price}
          name={cookie.type}
        />
      ))}
      {/* </ListGroup> */}
      {/* </Card> */}
    </Fragment>
  );
};

export default CookieList;
