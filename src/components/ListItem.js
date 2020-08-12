import React from "react";
import { Card, Text } from "@mrshmllw/smores-react";

function ListItem({ name }) {

  return (
    <Card >
      <Text
        type="h1"
      >
        {name}
      </Text>
    </Card>
  );
}

export default ListItem;
