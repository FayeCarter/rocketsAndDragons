import React, { useState } from "react";
import { getData } from "./services/API";
import { Button } from "@mrshmllw/smores-react";
import ListItem from "./components/ListItem";
function App() {

  const [rockets, setRockets] = useState([])
  const [dragons, setDragons] = useState([])

  const getInfo = async (vehicle) => {
    const data = await getData(vehicle);
    vehicle === "rockets" ? setRockets(data) : setDragons(data);
  }

  return (
    <div className="App">
      <h1>Rockets and Dragons</h1>
      <Button 
        color="green"
        handleClick={() => getInfo("rockets")}
      >
        Get Rockets
      </Button>
      <Button 
        color="green"
        handleClick={() => getInfo("dragons")}
      >
        Get Dragons
      </Button>
      {rockets.map((rocket, index) => {
        return (
          <ListItem 
            key={index} 
            className="rocket" 
            name={rocket.rocket_name} 
            description={rocket.description}
            image={rocket.flickr_images[1]}
          />
        )
      })}
      {dragons.map((dragon, index) => {
        return (
          <ListItem 
            key={index} 
            className="dragon" 
            name={dragon.name} 
            description={dragon.description}
            image={dragon.flickr_images[1]}
          />
        )
      })}
    </div>
  );
}

export default App;
