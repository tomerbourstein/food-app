import { ReactComponent as Logo } from "../../media/kuperman.svg";
import { ReactComponent as Facebook } from "../../media/facebook.svg";
import { ReactComponent as Instagram } from "../../media/instagram.svg";
import { ReactComponent as Youtube } from "../../media/youtube.svg";
import { ReactComponent as Whatsapp } from "../../media/whatsapp.svg";

import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <Logo className={classes.logoSvg} />
      </div>
      <div className={classes.logos}>
        <a href="https://www.facebook.com/chen.kuperman">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/chenkuperman/">
          <Instagram />
        </a>
        <a href="">
          <Youtube />
        </a>
        <a href="https://faq.whatsapp.com/563219570998715/?helpref=uf_share">
          <Whatsapp />
        </a>
      </div>
      <div>
        <p>Tomer Bourstein Ⓒ 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
