import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
    <div className="filter-checkbox">
      <label htmlFor="filter-checkbox__input" className="filter-checkbox__label">
        <input type="checkbox" name="filter-checkbox" id="filter-checkbox__input" className="filter-checkbox__input"/>
        <div className="filter-checkbox__fake-input">
          <span className="filter-checkbox__fake-circle"></span>
        </div>
        <p className="filter-checkbox__text">Короткометражки</p>
      </label>
    </div>
    </>
  );
}

export default FilterCheckbox;