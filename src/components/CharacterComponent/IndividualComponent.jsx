import "./Individual.css";

function IndividualComponent({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div className="details">
        <p>
          Name: {character.name}
          <br />
          Status: {character.status}{" "}
          {character.status === "Dead" ? <span>🔴</span> : <span>🟢</span>}
          <br />
          Gender: {character.gender}
          <br />
          Species: {character.species}
        </p>
      </div>
    </div>
  );
}

export default IndividualComponent;
