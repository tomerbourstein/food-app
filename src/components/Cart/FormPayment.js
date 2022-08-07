import useInput from "../hooks/use-input";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import classes from "./FormPayment.module.css";

const FormPayment = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAdrress,
    isValid: adrressIsValid,
    hasError: adrressHasError,
    valueChangeHandler: adrressChangeHandler,
    valueBlurHandler: adrressBlurHandler,
    reset: adrressReset,
  } = useInput((value) => /\d/.test(value) && value.trim() !== "");

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value !== "");

  const {
    value: enteredPostal,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalChangeHandler,
    valueBlurHandler: postalBlurHandler,
    reset: postalReset,
  } = useInput((value) => /[0-9]{6}/g.test(value) && value.length < 7);

  const {
    value: enteredPayment,
    isValid: paymentIsValid,
    hasError: paymentHasError,
    valueChangeHandler: paymentChangeHandler,
    valueBlurHandler: paymentBlurHandler,
    reset: paymentReset,
  } = useInput((value) => value !== "");

  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    adrressIsValid &&
    postalIsValid &&
    cityIsValid &&
    paymentIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    firstNameBlurHandler();
    lastNameBlurHandler();
    adrressBlurHandler();
    postalBlurHandler();
    cityBlurHandler();
    paymentBlurHandler();
    if (!formIsValid) {
      return;
    }
    const data = {
      cookies: [...props.checkoutCookie],
      sum: props.checkoutSum(),
      firstName: enteredFirstName,
      lastName: enteredLastName,
      adress: enteredAdrress,
      postal: enteredPostal,
      city: enteredCity,
      payment: enteredPayment,
    };

    // console.log(data);
    firstNameReset();
    lastNameReset();
    adrressReset();
    postalReset();
    cityReset();
    paymentReset();

    props.handleSubmit(data);
  };
  return (
    <>
      <Form id="payment-form" onSubmit={formSubmitHandler}>
        <Row
          className={
            firstNameHasError || lastNameHasError ? "mt-2" : "mt-2 mb-4"
          }
        >
          <Col>
            <InputGroup size="sm">
              <InputGroup.Text>First Name</InputGroup.Text>
              <Form.Control
                name="firstName"
                isInvalid={firstNameHasError}
                value={enteredFirstName}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                aria-label="First Name"
              />
            </InputGroup>
            {firstNameHasError && (
              <p className={classes.invalid}>Must not be empty!</p>
            )}
          </Col>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Text>Last Name</InputGroup.Text>
              <Form.Control
                name="lastName"
                isInvalid={lastNameHasError}
                value={enteredLastName}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                aria-label="Last Name"
              />
            </InputGroup>
            {lastNameHasError && (
              <p className={classes.invalid}>Must not be empty!</p>
            )}
          </Col>
        </Row>

        <Row className={adrressHasError || postalHasError ? null : "mb-4"}>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Text>Adrress</InputGroup.Text>
              <Form.Control
                name="adrress"
                isInvalid={adrressHasError}
                value={enteredAdrress}
                onChange={adrressChangeHandler}
                onBlur={adrressBlurHandler}
                aria-label="Adrress"
              />
            </InputGroup>
            {adrressHasError && (
              <p className={classes.invalid}>Must include a number!</p>
            )}
          </Col>

          <Col>
            <InputGroup size="sm">
              <InputGroup.Text>Postal</InputGroup.Text>
              <Form.Control
                name="postal"
                isInvalid={postalHasError}
                value={enteredPostal}
                onChange={postalChangeHandler}
                onBlur={postalBlurHandler}
                aria-label="Postal Code"
              />
            </InputGroup>
            {postalHasError && (
              <p className={classes.invalid}>Must include a 6-digits number!</p>
            )}
          </Col>
        </Row>

        <Row className={cityHasError ? null : "mb-4"}>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Text>City</InputGroup.Text>
              <Form.Select
                name="city"
                isInvalid={cityHasError}
                value={enteredCity}
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                aria-label="Select City"
                // placeholder="Choose"
              >
                <option disabled hidden value="">
                  Choose
                </option>
                <option value="Tel-Aviv">Tel-Aviv</option>
                <option value="Ramat-Gan">Ramat-Gan</option>
                <option value="Givatayim">Givatayim</option>
              </Form.Select>
            </InputGroup>
            {cityHasError && (
              <p className={classes.invalid}>Must select a city!</p>
            )}
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <InputGroup size="sm">
              <InputGroup.Text>Payment Method</InputGroup.Text>
              <Form.Select
                name="payment"
                isInvalid={paymentHasError}
                value={enteredPayment}
                onChange={paymentChangeHandler}
                onBlur={paymentBlurHandler}
                aria-label="Select Payment Method"
              >
                <option disabled hidden value="">
                  Choose
                </option>
                <option value="PayPal">PayPal</option>
                <option value="Credit Card">Credit Card</option>
              </Form.Select>
            </InputGroup>
            {paymentHasError && (
              <p className={classes.invalidNoMargin}>
                Must select a payment method!
              </p>
            )}
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormPayment;
