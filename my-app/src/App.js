import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import Cards from "../src/Components/Cards.js";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [pacients, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        console.log(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <div className="App">
      <header className="headerTitle">
        <span>l</span>
        <span>i</span>
        <span>g</span>
        <span>h</span>
        <span>t</span>
        <span>-</span>
        <span>I</span>
        <span>T</span>
      </header>
      <Cards pacients={pacients} />
    </div>
  );
}

export default App;
