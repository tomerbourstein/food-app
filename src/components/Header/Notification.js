import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Notification.module.css";

const Notification = () => {
  const notification = useSelector((state) => state.ui.notification);
  const [isShow, setIsShow] = useState(true);

  let dataMessage = "";
  if (notification.status === "success") {
    dataMessage = "text-success ";
  }
  if (notification.status === "error") {
    dataMessage = "text-danger";
  }

  useEffect(() => {
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 4000);
  }, [notification]);

  return (
    <section className={classes.message}>
      <Navbar.Text as="span" className={dataMessage}>
        {isShow && notification.message}
      </Navbar.Text>
    </section>
  );
};

export default Notification;
