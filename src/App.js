import React, { useState } from "react";
import { Button } from "@mrshmllw/smores-react";

import { getData } from "./services/API";

import ListItem from "./components/ListItem";
import Rocket from "./components/Rocket";
import Dragon from "./components/Dragon";

import { GlobalStyle, StyledApp, StyledResults } from './styles/App.styles';

function App() {

  const [data, setData] = useState([])
  const [vehicle, setVehicle] = useState("")
  const [clicked, setClicked] = useState(false)
  const [item, setItem] = useState(false)

  const getInfo = async (vehicle) => {
    setClicked(false)
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
    <StyledApp className="App">
      <GlobalStyle />
      <h1>Rockets and Dragons</h1>
      <div className="controls">
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
      </div>
      <StyledResults>
        <div>
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
        </div>
      { clicked && vehicle === "rockets" ? <Rocket data={ item } /> : null}
      { clicked && vehicle === "dragons" ? <Dragon data={ item } /> : null}
      </ StyledResults>
    </ StyledApp>
  );
}

export default App;
