import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import './App.css';

function App() {
  const [cities, setCities] = useState([
    {
      id: 1,
      name: 'Seattle',
      country: 'USA',
      population: '733,919'
    }
  ]);

  const addCity = (city) => {
    const newCity = {
      id: Date.now(),
      ...city
    };
    setCities([...cities, newCity]);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>Cities Application</h1>
          <nav>
            <NavLink to="/cities">Cities List</NavLink>
            <NavLink to="/add-city">Add City</NavLink>
          </nav>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/cities" />} />
            <Route path="/cities" element={<CitiesList cities={cities} />}>
              <Route path=":id" element={<CityDetails cities={cities} />} />
            </Route>
            <Route path="/add-city" element={<AddCity addCity={addCity} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;