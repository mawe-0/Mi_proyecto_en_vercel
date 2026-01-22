import { useEffect, useState } from 'react';

function AlumnoXID() {
  const [alumnos, setAlumnos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://servidorclasedaw.onrender.com/alumno5/alumnos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener alumnos');
        }
        return response.json();
      })
      .then(data => {
        setAlumnos(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
  <div>
    <h2>Listado de alumnos</h2>

    <div className="alumnos-grid">
      {alumnos.map(alumno => (
        <div className="alumno-card" key={alumno.id}>
          <h3>{alumno.nombre} {alumno.apellido1}</h3>

          <p><strong>Apellidos:</strong> {alumno.apellido1} {alumno.apellido2}</p>
          <p><strong>Edad:</strong> {alumno.edad}</p>
          <p><strong>Sexo:</strong> {alumno.sexo}</p>
          <p><strong>Curso:</strong> {alumno.curso}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default AlumnoXID;
