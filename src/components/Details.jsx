// src/components/Details.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const { state } = useLocation();

  if (!state || !state.data) {
    return (
      <div style={{ marginTop: '20px' }}>
        <h2>No country data available.</h2>
      </div>
    );
  }

  const country = state.data;

  return (
    <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
      <h2>{country.name.common} ({country.cca2})</h2>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
      <p><strong>Official Name:</strong> {country.name.official}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
      <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'N/A'}</p>
    </div>
  );
}

export default Details;
