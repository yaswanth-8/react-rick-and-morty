import React, { useState, useEffect } from "react";
import "./Character.css";

function CharacterComponent() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Render the characters data here */}
      {characters &&
        characters.map((character) => (
          <div key={character.id} className="card">
            <img src={character.image} />
            <div className="details">
              <p>
                Name: {character.name}
                <br />
                Status: {character.status}{" "}
                {character.status === "Dead" ? (
                  <span>🔴</span>
                ) : (
                  <span>🟢</span>
                )}
                <br />
                Gender: {character.gender}
                <br />
                Species: {character.species}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CharacterComponent;
