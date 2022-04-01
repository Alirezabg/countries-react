import "./App.css";
import React from "react";
import countriesAll from "./countriesAll.json";
function App() {
  return (
    <div className="App">
      {countriesAll.map((country) => (
        <>
          <div className="">
            <img src={country.flags.png} alt="countries flag" />
            <p>{country.name.common}</p>
            <p>Population : {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>
            <p>region : {country.region} </p>
            <p>Capital : {country.capital} </p>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
