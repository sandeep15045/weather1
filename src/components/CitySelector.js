import React, {useState} from 'react';
import "./style.css";

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
          <div>
            <h1>Search your city</h1>
          </div>
  
        <div>
          <div>
            <input className="search-bar"
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </div>
        </div>
  
          <div>
            <button className="search-button" onClick={() => onSearch(city)}>Check Weather
            </button>
          </div>
      </>
    );
  };

export default CitySelector;