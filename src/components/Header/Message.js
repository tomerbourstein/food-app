import React from "react";
import classes from "./Message.module.css";
import { ReactComponent as Logo } from "../../media/kuperman.svg";
import Alert from "react-bootstrap/Alert";

const Message = (props) => {
  return (
    <Alert className={classes.alertMessage} variant="secondary">
      <Logo className={classes.svgImg} />
      <p>
        ,חן קופרמן עמל יום וליל לייצר את עוגיות השוקולד צ'יפס
        {/* Chen Kuperman made from scratch,
        using the best ingridients from the top suppliers in the country. */}
      </p>
      <p>.תוך שימוש בחומרי הגלם הטובים ביותר ומספקים מהשורה הראשונה</p>
      <p>
        .הרגישו חופשי לבחור ממבחר עוגיות שוקולד צ'יפס
        {/* Feel free to choose the variaty of chocolate chip cookies that our very own  */}
      </p>
    </Alert>

    
  );
};

export default Message;
