import React from "react";
import "./App.css";
import NasaHeader from "./NasaHeader";
import { CardHeader } from "reactstrap";

function App() {
  return (
    <div className="App">
      <CardHeader
        body
        inverse
        style={{ backgroundColor: "lightgrey", borderColor: "#333" }}
      >
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </CardHeader>
      <NasaHeader />
    </div>
  );
}

export default App;
