import { Link, Outlet } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div className="card">
      <h2>Cities List</h2>

      <ul className="city-list">
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default CitiesList;