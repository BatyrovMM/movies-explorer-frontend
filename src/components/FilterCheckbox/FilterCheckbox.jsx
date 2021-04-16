import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ checkbox }) {

  const handleChange = (event) => {
    checkbox(event.target.checked);
  };

  return (
    <>
      <div className="filter-checkbox">
        <label htmlFor="filter-checkbox__input" className="filter-checkbox__label">
          <input type="checkbox" name="filter-checkbox" id="filter-checkbox__input" className="filter-checkbox__input" onChange={handleChange}/>
          <span className="filter-checkbox__fake-input">
            <span className="filter-checkbox__fake-circle"></span>
          </span>
          <span className="filter-checkbox__text">Короткометражки</span>
        </label>
      </div>
    </>
  );
}

export default FilterCheckbox;