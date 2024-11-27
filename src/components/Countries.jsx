// src/components/Countries.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCca2, setSelectedCca2] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch countries with 'kingdom' in their name
    fetch('https://restcountries.com/v3.1/name/kingdom')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        return response.json();
      })
      .then(data => {
        // Sort countries alphabetically by name
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleSelectChange = (e) => {
    const cca2 = e.target.value;
    setSelectedCca2(cca2);
    const selectedCountry = countries.find(country => country.cca2 === cca2);
    if (selectedCountry) {
      navigate(`/countries/${cca2}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>World Kingdoms</h1>
      <label htmlFor="country-select">Select a Kingdom:</label>
      <br />
      <select
        id="country-select"
        value={selectedCca2}
        onChange={handleSelectChange}
        style={{ padding: '8px', marginTop: '10px', width: '200px' }}
      >
        <option value="">--Please choose a kingdom--</option>
        {countries.map(country => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>

      {/* Render the child route (Details) */}
      <Outlet />
    </div>
  );
}

export default Countries;
