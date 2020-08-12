import React, { useState } from "react";
import { getData } from "./services/API";
import { Button } from "@mrshmllw/smores-react";

function App() {

  const [rockets, setRockets] = useState([])

  const getInfo = async (vehicle) => {
    const data = await getData(vehicle);
    setRockets(data);
  }

  return (
    <div className="App">
      <h1>Rockets and Dragons</h1>
      <Button 
        color="green"
        handleClick={() => getInfo("rockets")}
        className="rocket-button"
      >
        Get rockets
      </Button>
      {rockets.map((rocket, index) => {
        return (
          <h2 key={index} className="rocket">{rocket.rocket_name}</h2>
        )
      })}
    </div>
  );
}

export default App;
