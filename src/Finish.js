import React from "react";
import { Button } from "@mui/material";


function Finish() {
  return (
    <div>
      <div className="Home">
        <div className="Popup">
          <div className="Bob">
            <img src="Bob.png" width="30%" alt="Bob" />
          </div>
          <div className="Hello">
            <p>Bonjour ! Vous tombez bien</p>
          </div>
          <div className="Text">
            {/* <Button className="Button" onClick={handleClick}>
              C'est parti
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finish;
