import React from "react";
import { LabelledText } from "@mrshmllw/smores-react";

function InfoSheet({ type, data }) {

  return (
    <div className={type}>
      {Object.entries(data).map(([key, value], index) => {
        return (
          <LabelledText
            key={index} 
            label={key}
          >
            { value }
          </LabelledText>
        )
      })}
    </div>
  );
}

export default InfoSheet;
