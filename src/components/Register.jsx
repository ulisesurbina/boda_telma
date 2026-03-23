import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [form, setForm] = useState({
    nombre: '',
    asistencia: '',
    invitados: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'invitados') {
    if (value === '' || Number(value) >= 0) {
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
        }
        return;
    }
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
        ...form,
        invitados: form.invitados === '' ? 0 : Number(form.invitados)
    };

   console.log(dataToSend);

    alert('¡Gracias por confirmar tu asistencia!');
    
    setForm({
      nombre: '',
      asistencia: '',
      invitados: '',
      mensaje: ''
    });
  };

  return (
    <section className="rsvp floral-container" id="rsvp">
      <div className="container">
        <h2 className="section-title">Confirma tu asistencia</h2>
        <p className="section-subtitle">Nos encantará compartir este día contigo</p>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <select
            name="asistencia"
            value={form.asistencia}
            onChange={handleChange}
            required
          >
            <option value="">¿Asistirás?</option>
            <option value="si">Sí, asistiré</option>
            <option value="no">No podré asistir</option>
          </select>

          <input
            type="number"
            name="invitados"
            placeholder="Número de invitados"
            min="0"
            value={form.invitados}
            onChange={handleChange}
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje para los novios, dudas o comentarios"
            value={form.mensaje}
            onChange={handleChange}
          />

          <button className='btn btn-primary' type="submit">
            Confirmar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;