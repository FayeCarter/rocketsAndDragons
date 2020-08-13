import React from "react";
import { Icon } from "@mrshmllw/smores-react";

function ControlForm() {

  return (
    <div className="control-form">
      <div className="left-arrow">
        <Icon 
          color="pink6"
          render="arrow"
          size={38}
        />
      </div>
      <div className="right-arrow">
        <Icon 
          color="pink6"
          render="arrow"
          rotate={180}
          size={38}
        />
      </div>
    </div>
  );
}

export default ControlForm;