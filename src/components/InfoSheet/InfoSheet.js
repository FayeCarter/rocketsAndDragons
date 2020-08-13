import React from "react";
import { LabelledText } from "@mrshmllw/smores-react";

import { StyledInfoSheet } from "./styles/InfoSheet.styled";

function InfoSheet({ type, data }) {

  return (
    <div className={type}>
      <StyledInfoSheet>
        {Object.entries(data).map(([key, value], index) => {
          return (
            <LabelledText
              key={ index } 
              label={ key }
            >
              { value }
            </LabelledText>
          )
        })}
      </ StyledInfoSheet>
    </div>
  );
};

export default InfoSheet;
