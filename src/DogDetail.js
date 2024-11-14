import React from "react";
import { useLocation, useParams, Navigate } from "react-router-dom";

function DogDetail() {
  const { id } = useParams();
  const location = useLocation();
  const dog = location.state?.dog;

  if (!dog) {
    // Si el objeto `dog` no está en el estado, redirige al usuario a la página principal
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Origin: {dog.origin || "Unknown"}</p>
      <p>Life Span: {dog.life_span}</p>
      <img src={dog.image?.url} alt={dog.name} width="300" />
    </div>
  );
}

export default DogDetail;

