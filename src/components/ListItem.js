import React, { useState, useEffect } from "react";
import { Card, Icon } from "@mrshmllw/smores-react";

function ListItem({ type, data }) {

  const {description, flickr_images: images} = data;
  const [name, setName] = useState("")

  useEffect(  () => {
    type === "rockets" ? setName(data.rocket_name) : setName(data.name);
  }, [name]);

  return (
    <div >
      <Card>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={images[1]} alt="Item" />
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
