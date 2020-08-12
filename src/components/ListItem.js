import React from "react";
import { Card, Icon } from "@mrshmllw/smores-react";

function ListItem({ name, description, image }) {

  const handleClick = () => {
    console.log("HEEEy")
  }

  return (
    <div onClick={ handleClick } >
      <Card>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={image} alt="Item" />
        <Icon 
          color="pink6"
          render="arrow"
          rotate={180}
          size={38}
        />
      </Card>
    </div>
  );
}

export default ListItem;
