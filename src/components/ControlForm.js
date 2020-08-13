import React from "react";
import { Icon } from "@mrshmllw/smores-react";

function ControlForm({titles}) {

  return (
    <div className="control-form">
      <div className="left-arrow">
        <Icon 
          color="pink6"
          render="arrow"
          size={38}
        />
      </div>
      <ul className="pages">
        { titles.map((page, index) => {
            return (
              <li key={index}>
                {page}
              </li>
            )
          })
        }
      </ul>
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