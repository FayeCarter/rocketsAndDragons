import React from "react";
import { Card } from "@mrshmllw/smores-react";

function Rocket({ data }) {

  const {rocket_name: name, description} = data;

  return (
    <div>
      <Card>
        <h1>{name}</h1>
        <p>{description}</p>
      </Card>
    </div>
  );
}

export default Rocket;
