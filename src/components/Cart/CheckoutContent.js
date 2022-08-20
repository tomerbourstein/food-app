import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import classes from "./CheckoutContent.module.css";
import { ReactComponent as ArrowBadge } from "..//../media/caret-right-fill.svg";
const CheckoutContent = (props) => {
  const checkoutCookie = useSelector((state) => state.cart.cartList);
  const sumPrice = useSelector((state) => state.cart.totalPrice);

  const popover = (
    <Popover id="popover-basic" className={classes.popover}>
      <Popover.Header className={classes.popoverHeader}> </Popover.Header>
      <Popover.Body>
        <Row className={classes.checkoutSquares}>
          {checkoutCookie.map((cookie, i) => (
            <Col key={i} className={classes.checkoutContent}>
              <ListGroup.Item className={classes.padd} as="li">
                <div className="fw-bold d-flex justify-content-between ">
                  <p className="mb-1">
                    {" "}
                    {cookie.type} {"x" + cookie.amount}{" "}
                  </p>
                  <Badge className={classes.badgeColor} bg="secondary" pill>
                    {cookie.price + "₪"}
                  </Badge>
                </div>
              </ListGroup.Item>
            </Col>
          ))}
        </Row>
      </Popover.Body>
    </Popover>
  );

  const TotalAmountPopover = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <h4>
        <Badge className={classes.badgeColor} bg="none">
          <div>
            Total Amount: {sumPrice}₪ <ArrowBadge />
          </div>
        </Badge>
      </h4>
    </OverlayTrigger>
  );
  return (
    <ListGroup variant="flush">
      <Col className="mt-3">
        <TotalAmountPopover />
      </Col>
    </ListGroup>
  );
};

export default CheckoutContent;
