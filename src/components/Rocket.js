import React, {useState} from "react";
import { Card, LabelledText } from "@mrshmllw/smores-react";

function Rocket({ data }) {

  const {
    rocket_name: name, 
    description, 
    height, 
    diameter, 
    mass,
    cost_per_launch: cost,
    success_rate_pct: success,
    first_flight,
    country,
    engines
  } = data;

  const [page, setPage] = useState(0)

  const titles = ["Basic Info", "Dimensions", "Engine"]

  const changePage = (direction) => {
    if (direction === "up") {
      if (page < titles.length) {setPage(page + 1)}
    } else {
      if (page > 0) {setPage(page - 1)}
    }
  }

  return (
    <div>
      <Card maxWidth="700px" marginY="20px" marginX="20px">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="basic-info">
          <LabelledText label="Country">
            { country }
          </LabelledText>
          <LabelledText label="First Flight">
            { first_flight }
          </LabelledText>
          <LabelledText label="Cost per Launch">
            $ { cost }
          </LabelledText>
          <LabelledText label="Success Rate">
            { success } %
          </LabelledText>
        </div>
      </Card>
    </ div>
  );
}

export default Rocket;
