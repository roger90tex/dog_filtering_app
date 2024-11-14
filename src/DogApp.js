import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchDogs from "./useFetchDogs";

function DogApp() {
  const { dogs, loading, error } = useFetchDogs();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDogs = dogs?.filter((dog) =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Dog Filtering App</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {dogs && (
        <>
          <input
            type="text"
            placeholder="Buscar raza..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {filteredDogs.length > 0 ? (
              filteredDogs.map((dog) => (
                <li key={dog.id}>
                  <Link
                    to={`/dog/${dog.id}`}
                    state={{ dog }} // Pasar el objeto `dog` en el estado
                  >
                    {dog.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No se encontraron razas que coincidan con la búsqueda</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default DogApp;

