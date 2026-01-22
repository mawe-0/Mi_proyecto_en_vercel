import { useState } from 'react';
import '../componentes/CrearAlumno.css'

function CrearAlumno() {
  const [form, setForm] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    edad: '',
    sexo: '',
    curso: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const crearAlumno = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://servidorclasedaw.onrender.com/alumno5/alumnos',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...form,
            edad: Number(form.edad),
            curso: Number(form.curso)
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al crear alumno');
      }

      setMensaje('Alumno creado correctamente');
      setError('');
      setForm({
        nombre: '',
        apellido1: '',
        apellido2: '',
        edad: '',
        sexo: '',
        curso: ''
      });

      console.log(data);
    } catch (err) {
      setError(err.message);
      setMensaje('');
    }
  };

  return (
    <div>
      <h2>Crear alumno</h2>

      <form onSubmit={crearAlumno}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="apellido1"
          placeholder="Apellido 1"
          value={form.apellido1}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="apellido2"
          placeholder="Apellido 2"
          value={form.apellido2}
          onChange={handleChange}
        />

        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={form.edad}
          onChange={handleChange}
          required
        />

        <select
          name="sexo"
          value={form.sexo}
          onChange={handleChange}
          required
        >
          <option value="">Sexo</option>
          <option value="F">F</option>
          <option value="M">M</option>
        </select>

        <input
          type="number"
          name="curso"
          placeholder="Curso"
          value={form.curso}
          onChange={handleChange}
          required
        />

        <button type="submit">Crear alumno</button>
      </form>

      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CrearAlumno;
