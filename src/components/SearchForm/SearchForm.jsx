import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ startSearch, onSearch, onCheckbox }) {
  const [data, setData] = useState('');
  const [showError, setShowError] = useState(false);
  
  const handleChange = (event) => {
    setShowError(false);
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowError(false);
    if (data === '') {
      return setShowError(prevShowError => !prevShowError)
    }
    startSearch(data)
    onSearch()
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
            <span className={showError ? `search-form__error` : `search-form__error search-form__error_disable`}>Нужно ввести ключевое слово</span>
          </form>
          <FilterCheckbox checkbox={onCheckbox}/>
          <div className="search-form__line"></div>
        </div>
      </section>
    </>
  );
}

export default SearchForm;
