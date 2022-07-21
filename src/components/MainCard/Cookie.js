import React from "react";
import classes from "./Cookie.module.css";
import AmountButton from "./AmountButton";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const Cookie = (props) => {

  return (
    <ListGroup.Item variant="dark" className={classes.listItem}>
      <div>
        <p className={classes.cookieType}>{props.type}</p>
        <div className={classes.itemPrice}>
          <Badge bg="secondary"> {props.price} ₪ </Badge>
        </div>
      </div>
      <div className={classes.cookieDescription}>
        <p>{props.description}</p>
      </div>

      <AmountButton
        className={classes.itemButton}
        name={props.name}
        description={props.description}
        price={props.price}
        addCookieHandler={props.addCookieHandler}
      />
    </ListGroup.Item>
  );
};

export default Cookie;
