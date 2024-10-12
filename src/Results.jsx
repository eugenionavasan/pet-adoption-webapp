import Pet from './Pet.jsx';

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <div className="loading-pane">
          <h1 className="loader">🌀</h1>
        </div>
      ) : (
        pets.map(pet => (
          <Pet 
            animal={pet.animal}
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;