import React from "react";
import { Card, Text } from "@mrshmllw/smores-react";

function ListItem({ name, description }) {

  return (
    <Card >
      <h1>{name}</h1>
      <p>{description}</p>
    </Card>
  );
}

export default ListItem;
