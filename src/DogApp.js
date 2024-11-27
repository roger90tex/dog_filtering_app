import React, { useState } from "react";
import useFetchDogs from "./useFetchDogs";
import {
  Main,
  Header,
  SearchSection,
  ListSection,
  ErrorText,
  LoadingText,
  DogLink,
} from "./DogApp.styles";

function DogApp() {
  const { dogs, loading, error } = useFetchDogs();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDogs = dogs?.filter((dog) =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Main>
      <Header>
        <h1>Dog Filtering App</h1>
      </Header>
      <SearchSection aria-label="Search for dog breeds">
        <input
          type="text"
          placeholder="Buscar raza..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar raza de perro"
        />
      </SearchSection>
      <ListSection aria-label="List of dog breeds">
        {loading && <LoadingText>Loading...</LoadingText>}
        {error && <ErrorText>Error: {error.message}</ErrorText>}
        {dogs && (
          <ul>
            {filteredDogs.length > 0 ? (
              filteredDogs.map((dog) => (
                <li key={dog.id}>
                  <img
                    src={dog.image?.url}
                    alt={dog.name}
                    width={100}
                    height={100}
                  />
                  <DogLink
                    to={`/dog/${dog.id}`}
                    state={{ dog }}
                    isHighlighted={searchTerm !== ""}
                  >
                    {dog.name}
                  </DogLink>
                </li>
              ))
            ) : (
              <p>No se encontraron razas que coincidan con la búsqueda</p>
            )}
          </ul>
        )}
      </ListSection>
    </Main>
  );
}

export default DogApp;
