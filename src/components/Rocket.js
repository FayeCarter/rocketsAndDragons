import React from "react";
import { Card } from "@mrshmllw/smores-react";
import InfoSheet from './InfoSheet';
import ControlForm from './ControlForm';

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

  const dimensions = {
    "height": height.meters,
    "diameter": diameter.meters,
    "mass": mass.kg
  }

  const basicInfo = {
    "cost": cost,
    "success": success,
    "first flight": first_flight,
    "country": country
  }

  const engineData = {
    "number of engines": engines.engines,
    "type": engines.type,
    "version": engines.version,
    "layout": engines.layout,
    "maximum engine loss": engines.engine_loss_max,
    "propellant 1": engines.propellant_1,
    "propellant 2": engines.propellant_2,
    "thrust to weight": engines.thrust_to_weight,
    "isp at sea level": engines.isp.sea_level,
    "thrust at sea level": engines.thrust_sea_level.kN,
    "isp in vacuum": engines.isp.vacuum,
    "thrust in vacuum": engines.thrust_vacuum.kN,
  }

  const pages = ["Basic Info", "Dimensions", "Engines"]

  return (
    <div>
      <Card maxWidth="700px" marginY="20px" marginX="20px">
        <h1>{name}</h1>
        <ControlForm titles={pages} />
        <p>{description}</p>
        <InfoSheet type="basic-info" data={basicInfo}/>
        <InfoSheet type="dimensions" data={dimensions}/>
        <InfoSheet type="engines" data={engineData}/>
      </Card>
    </ div>
  );
}

export default Rocket;
