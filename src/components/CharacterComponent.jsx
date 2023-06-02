import React, { useState } from "react";
import { useQuery } from "react-query";
import "./Character.css";
import IndividualComponent from "./CharacterComponent/IndividualComponent";

function CharacterComponent() {
  const [page, setPage] = useState(1);
  const fetchData = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`
    );
    const data = await response.json();
    return data;
  };
  const {
    data: characters,
    isPreviousData,
    isLoading,
    isError,
  } = useQuery(["myData", page], fetchData, { keepPreviousData: true });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>Rick and Morty</h1>
      {characters.results &&
        characters.results.map((character) => (
          <IndividualComponent key={character.id} character={character} />
        ))}
      <div className="buttons">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          👈🏼
        </button>
        <button
          disabled={isPreviousData || !characters.info.next}
          onClick={() => setPage(page + 1)}
        >
          👉🏼
        </button>
      </div>
    </div>
  );
}

export default CharacterComponent;
