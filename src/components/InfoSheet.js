import React from "react";
import { LabelledText } from "@mrshmllw/smores-react";

import { StyledInfoSheet } from '../styles/InfoSheet.styled';

function InfoSheet({ type, data }) {

  return (
    <StyledInfoSheet className={type}>
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
    </ StyledInfoSheet>
  );
}

export default InfoSheet;
