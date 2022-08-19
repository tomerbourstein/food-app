import { ReactComponent as Logo } from "../../media/kuperman.svg";
import { ReactComponent as Facebook } from "../../media/facebook.svg";
import { ReactComponent as Instagram } from "../../media/instagram.svg";
import { ReactComponent as Youtube } from "../../media/youtube.svg";
import { ReactComponent as Whatsapp } from "../../media/whatsapp.svg";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    
    <footer className={classes.footer} >

      {/* <Container> */}

      <div>
        <Logo className={classes.logoSvg} />
      </div>
      <div className={classes.logos}>
        <Facebook /> <Instagram /> <Youtube /> <Whatsapp />
      </div>
      <div>
        <p>Tomer Bourstein Ⓒ 2022</p>
      </div>
      {/* </Container> */}

    </footer>
  );
};

export default Footer;
