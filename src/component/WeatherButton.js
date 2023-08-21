import React from "react";
import { Button } from "react-bootstrap";

const WetherButton = ({ cities, setCity }) => {
  console.log(cities);

  // const searchByCity = async (cityName) => {
  //   setCity(cityName);
  //   let url = "api";
  //   let res = await fetch(url);
  //   let data = await res.json();
  // };
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      {cities.map((item, index) => (
        <Button variant="warning" key={index} onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
      {/* <Button variant="warning">New York</Button> */}
    </div>
  );
};

export default WetherButton;
