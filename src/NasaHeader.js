import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaHeader() {
  const [nasaPhoto, setNasaPhoto] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        // console.log(response);
        console.log("RESPONSE DATA: ", response.data);
        setNasaPhoto(response.data);
      })
      .catch(error => {
        console.log("The data was not returned by axios NasaHeader", error);
      });
  }, []);

  return (
    <div className="cardWrapper">
      <NasaCard
        title={nasaPhoto.title}
        date={nasaPhoto.date}
        explain={nasaPhoto.explanation}
        img={nasaPhoto.url}
      />
    </div>
  );
}
