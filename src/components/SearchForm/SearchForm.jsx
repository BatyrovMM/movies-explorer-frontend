import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <>
      <section className="search-form">
        <div className="wrapper wrapper_search-form">
          <form className="search-form__form">
            <input type="search" placeholder="Фильм" className="search-form__input"/>
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
