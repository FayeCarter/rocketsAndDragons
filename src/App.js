import React, { useState } from "react";
import { getData } from "./services/API";
import { Button } from "@mrshmllw/smores-react";
import ListItem from "./components/ListItem";
import Rocket from "./components/Rocket";

function App() {

  const [data, setData] = useState([])
  const [vehicle, setVehicle] = useState("")
  const [clicked, setClicked] = useState(false)
  const [item, setItem] = useState(false)

  const getInfo = async (vehicle) => {
    setData([]);
    const data = await getData(vehicle);
    setVehicle(vehicle);
    setData(data);
  }

  const handleClick = (passedItem) => {
    console.log("Click")
    setClicked(true)
    setItem(passedItem)
    console.log(vehicle )
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
            onClick={() => handleClick(item) } 
          >
            <ListItem 
              
              className={vehicle}
              type={vehicle} 
              data={item}
            />
          </div>
        )
      })}
      { clicked && vehicle === "rockets" ? <Rocket data={ item } /> : null}
    </div>
  );
}

export default App;
