import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [data, setData] = useState('')
  
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSearch(data)
  }; 

  return (
    <>
      <section className="search-form">
        <div className="wrapper wrapper_search-form">
          <form className="search-form__form" onSubmit={handleSubmit}>
            <input 
              name="search" 
              value={data}
              type="search" 
              placeholder="Фильм" 
              className="search-form__input"
              onChange={handleChange}
            />
            <button type="submit" className="search-form__button"></button>
          </form>
          <FilterCheckbox />
          <div className="search-form__line"></div>
        </div>
      </section>
    </>
  );
}

export default SearchForm;
