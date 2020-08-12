import React, { useState } from "react";
import { getData } from "./services/API";
import { Button } from "@mrshmllw/smores-react";
import ListItem from "./components/ListItem";

function App() {

  const [data, setData] = useState([])
  const [vehicle, setVehicle] = useState("")

  const getInfo = async (vehicle) => {
    setData([]);
    const data = await getData(vehicle);
    setVehicle(vehicle);
    setData(data);
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
      {data.map((item, index) => {
        return (
          <ListItem 
            key={index} 
            className={vehicle}
            type={vehicle} 
            data={item}
          />
        )
      })}
    </div>
  );
}

export default App;
