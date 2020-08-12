import React, { useState } from "react";
import { Button } from "@mrshmllw/smores-react";

function App() {

  return (
    <div className="App">
      <h1>Rockets and Dragons</h1>
      <Button 
        color="green"
        handleClick={() => console.log("rockets")}
      >
        Get rockets
      </Button>
    </div>
  );
}

export default App;
