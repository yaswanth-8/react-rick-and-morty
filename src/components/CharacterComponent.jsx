import React from "react";
import { useQuery } from "react-query";
import IndividualComponent from "./CharacterComponent/IndividualComponent";

function CharacterComponent() {
  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  };
  const { data: characters, status } = useQuery("myData", fetchData);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Loading</p>;
  }

  return (
    <div>
      {characters &&
        characters.map((character) => (
          <IndividualComponent key={character.id} character={character} />
        ))}
    </div>
  );
}

export default CharacterComponent;
