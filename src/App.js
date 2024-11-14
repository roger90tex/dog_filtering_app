import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogApp from "./DogApp";
import DogDetail from "./DogDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal para la app de filtrado de perros */}
          <Route path="/" element={<DogApp />} />
          {/* Ruta para mostrar detalles de cada perro */}
          <Route path="/dog/:id" element={<DogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
