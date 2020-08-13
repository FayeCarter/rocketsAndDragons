import React, { useState, useEffect } from "react";
import { Card, Icon, Tag } from "@mrshmllw/smores-react";

import { StyledItem, StyledContainer } from '../styles/Item.styles';

function ListItem({ type, data }) {

  const {flickr_images: images} = data;
  const [name, setName] = useState("")

  useEffect(  () => {
    type === "rockets" ? setName(data.rocket_name) : setName(data.name);
  }, [name]);

  const scrollToTop = ()  => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <StyledContainer onClick={scrollToTop}>
      <Card className="card" maxWidth="330px" narrow="true" marginY="20px" marginX="5px">
        <StyledItem>
          <h2>{name}</h2>
          <img src={images[1]} alt="Item" />
          <div className="tags">
            <Tag
              bgColor="green5"
              borderColor="green7"
              className=""
              color="white"
              label={`first flight: ${data.first_flight}`}
            />
            <Tag
              bgColor="green5"
              borderColor="green7"
              className=""
              color="white"
              label={`active: ${data.active}`}
            />
          </div>
          <Icon 
            color="pink6"
            render="arrow"
            rotate={180}
            size={38}
          />
        </StyledItem>
      </Card>
    </StyledContainer>
  );
}

export default ListItem;
