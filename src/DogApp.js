import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchDogs from "./useFetchDogs";
import "./DogApp.css"; 

function DogApp() {
  const {   dogs, loading, error } = useFetchDogs();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDogs = dogs?.filter((dog) =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
        <header>
            <h1>Dog Filtering App</h1>
        </header>
        <section aria-label="Search for dog breeds">
            <input
                type="text"
                placeholder="Buscar raza..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar raza de perro"
            />
        </section>
        <section aria-label="List of dog breeds">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {dogs && (          
                <ul>
                {filteredDogs.length > 0 ? (
                    filteredDogs.map((dog) => (
                        <article key={dog.id}>
                            <li key={dog.id}>
                                <img src={dog.image?.url} alt={dog.name} width={100} height={100} />
                                <Link
                                to={`/dog/${dog.id}`}
                                state={{ dog }} 
                                >
                                {dog.name}
                                </Link>
                            </li>
                        </article>
              ))
            ) : (
              <p>No se encontraron razas que coincidan con la búsqueda</p>
            )}
          </ul>
          )}
        </section>
    </main>
      );
      }

export default DogApp;

