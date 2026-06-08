import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ addCity }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    country: '',
    population: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCity(form);
    navigate('/cities');
  };

  return (
    <div className="card">
      <h2>Add City</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Country:</label>
        <input name="country" value={form.country} onChange={handleChange} required />

        <label>Population:</label>
        <input name="population" value={form.population} onChange={handleChange} required />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;