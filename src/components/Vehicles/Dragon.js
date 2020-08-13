import React, { useState } from "react";
import { Card } from "@mrshmllw/smores-react";
import InfoSheet from "../InfoSheet/InfoSheet";
import Controls from "../Controls/Controls";

import { StyledVehicle } from "./styles/Vehicle.styles";

function Dragon({ data }) {

  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["Basic Info", "Dimensions", "Heat Shield" ,"Thrusters"]

  const {
    name, 
    description, 
    diameter, 
    trunk, 
    height_w_trunk: full_height, 
    dry_mass_kg: mass, 
    first_flight, 
    type, 
    crew_capacity,
    heat_shield,
    thrusters
  } = data;

  const basicInfo = {
    "type":  type,
    "crew capacity": crew_capacity,
    "first flight": first_flight
  };

  const dimensions = {
    "diameter": `${diameter.meters}m`,
    "trunk": `${trunk.trunk_volume.cubic_meters}m³`,
    "full height": `${full_height.meters}m`,
    "mass": `${mass}kg`
  };

  const heatShield = {
    "material": heat_shield.material,
    "size": `${heat_shield.size_meters}m`,
    "temperature": `${heat_shield.temp_degrees} degrees`,
    "development partner": heat_shield.dev_partner,
  };

  const thrustersData = {
    "type": thrusters[0].type,
    "amount": thrusters[0].amount,
    "pods": thrusters[0].pods,
    "fuels": `${thrusters[0].fuel_1} and ${thrusters[0].fuel_2}`,
    "isp": thrusters[0].isp,
    "thrust": `${thrusters[0].thrust.kN}kN`
  };

  return (
    <StyledVehicle>
      <Card 
        maxWidth="700px" 
        marginY="20px" 
        marginX="20px"
      >
        <h1>{name}</h1>
        <Controls 
          titles={pages} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <p>{description}</p>
        { pages[currentPage] === "Basic Info" ? <InfoSheet type={"basic-info"} data={basicInfo} /> : null }
        { pages[currentPage] === "Dimensions" ? <InfoSheet type={"dimensions"} data={dimensions} /> : null }
        { pages[currentPage] === "Heat Shield" ? <InfoSheet type={"heat-shield"} data={heatShield} /> : null }
        { pages[currentPage] === "Thrusters" ? <InfoSheet type={"thrusters"} data={thrustersData} /> : null }
      </Card>
    </StyledVehicle>
  );
};

export default Dragon;
