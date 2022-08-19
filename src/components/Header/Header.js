import "./Header.css";
import { ReactComponent as Arrow } from "../../media/arrow-down-circle.svg";
import Message from "./Message";
const Header = () => {
  return (
    <section className="wrap">
      <div className="content">
        <Message className="welcome opacity-50" />
        <a href="main">
          <Arrow className="svgImg" />
        </a>
      </div>
    </section>
  );
};

export default Header;
