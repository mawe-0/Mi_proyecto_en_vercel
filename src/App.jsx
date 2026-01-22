import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import AlumnoXID from './componentes/AlumnoXID';
import CrearAlumno from './componentes/CrearAlumno';

function App() {
  const [recargar, setRecargar] = useState(false);

  return (
    <>
      <Header />
      <div className="divAlumnos">
        <div className="tarjetaAlumno">
          <AlumnoXID recargar={recargar} />
        </div>

        <div className="crearAlumno">
          <CrearAlumno onAlumnoCreado={() => setRecargar(!recargar)} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
