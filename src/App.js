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

  const handleClick = () => {
    console.log("HEEEy")
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
          <div 
            key={index} 
            onClick={ handleClick } 
          >
            <ListItem 
              
              className={vehicle}
              type={vehicle} 
              data={item}
            />
          </div>
        )
      })}
    </div>
  );
}

export default App;
