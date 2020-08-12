import React from "react";
import { Card } from "@mrshmllw/smores-react";

function Dragon({ data }) {

  const {name, description} = data;

  return (
    <div>
      <Card>
        <h1>{name}</h1>
        <p>{description}</p>
      </Card>
    </div>
  );
}

export default Dragon;
