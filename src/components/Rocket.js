import React, {useState} from "react";
import { Card, LabelledText } from "@mrshmllw/smores-react";
import InfoSheet from './InfoSheet';

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
    "info": "dimensions",
    "height": height.meters,
    "diameter": diameter.meters,
    "mass": mass.kg
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
        <InfoSheet data={dimensions}/>
        <div className="engine">
          <div>
            <LabelledText label="Number of Engines">
              { engines.number }
            </LabelledText>
            <LabelledText label="Type">
              { engines.type }
            </LabelledText>
            <LabelledText label="Version">
              { engines.version ? engines.version : "NA" }
            </LabelledText>
            <LabelledText label="Layout">
              { engines.layout ? engines.layout : "NA"  }
            </LabelledText>
          </div>
          <div>
            <LabelledText label="Maximum Engine Loss">
              { engines.engine_loss_max }
            </LabelledText>
            <LabelledText label="Propellant 1">
              { engines.propellant_1 }
            </LabelledText>
            <LabelledText label="Propellant 2">
              { engines.propellant_2 }
            </LabelledText>
            <LabelledText label="Thrust to Weight">
              { engines.thrust_to_weight }
            </LabelledText>
          </div>
          <div>
            <LabelledText label="Sea Level">
              <LabelledText label="Specific Impulse">
                { engines.isp.sea_level }
              </LabelledText>
              <LabelledText label="Thrust">
                { engines.thrust_sea_level.kN } kN
              </LabelledText>
            </LabelledText>
          </div>
          <div>
            <LabelledText label="Vacuum">
              <LabelledText label="Specific Impulse">
                { engines.isp.vacuum }
              </LabelledText>
              <LabelledText label="Thrust">
                { engines.thrust_vacuum.kN } kN
              </LabelledText>
            </LabelledText>              
          </div>
        </div>
      </Card>
    </ div>
  );
}

export default Rocket;
