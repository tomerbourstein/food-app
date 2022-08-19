import React, { Fragment } from "react";
import classes from "./Cookie.module.css";
import AmountButton from "./AmountButton";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

import cookie1 from "../../media/cookie1.jpeg";
// import cookie2 from "../../media/cookie2.jpeg";
// import cookie3 from "../../media/cookie3.jpeg";
// import cookie4 from "../../media/cookie4.jpeg";
// import cookie5 from "../../media/cookie5.jpeg";

const Cookie = (props) => {
  return (
    <Fragment>
      <Card className={classes.bodyBg}>
        <Card.Img variant="top" src={cookie1} />
        <Card.Body>
          <Card.Title>{props.type}</Card.Title>
          <Card.Text className={classes.cardText}>{props.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Badge bg="none" className={classes.badgeColor}>
            {" "}
            {props.price} ₪{" "}
          </Badge>
        </Card.Body>
        <Card.Footer>
          <AmountButton
            className={classes.itemButton}
            name={props.name}
            description={props.description}
            price={props.price}
          />
        </Card.Footer>
      </Card>

      {/* <ListGroup.Item variant="dark" className={classes.listItem}>
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
        />
    </ListGroup.Item> */}
    </Fragment>
  );
};

export default Cookie;
