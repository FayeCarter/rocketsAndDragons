import React from "react";
import { Card } from "@mrshmllw/smores-react";
import InfoSheet from './InfoSheet';

function Dragon({ data }) {

  const {
    name, 
    description, 
    diameter, 
    trunk, 
    height_w_trunk: full_height, 
    dry_mass_kg: mass, 
    first_flight, 
    type, 
    crew_capacity
  } = data;

  const basicInfo = {
    "type":  type,
    "crew capacity": crew_capacity,
    "first flight": first_flight
  };

  const dimensions = {
    "diameter": diameter.meters,
    "trunk": trunk.trunk_volume.cubic_meters,
    "full height": full_height.meters,
    "mass": mass
  };

  return (
    <div>
      <Card>
        <h1>{name}</h1>
        <p>{description}</p>
        <InfoSheet type={"basic-info"} data={basicInfo} />
        <InfoSheet type={"dimensions"} data={dimensions} />
      </Card>
    </div>
  );
}

export default Dragon;
