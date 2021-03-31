import { Link, NavLink } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <>
      <nav className="header__nav-tabs">
        <NavLink 
          className="header__nav-tabs-link" 
          to='/movies' 
          activeClassName="header__nav-tabs-link_active"
        >Фильмы
        </NavLink>
        <NavLink 
          className="header__nav-tabs-link" 
          to='/saved-movies' 
          activeClassName="header__nav-tabs-link_active"
        >Сохранённые фильмы
        </NavLink>
      </nav>
      <Link to="/profile" className="section__profile">
        <span className="section__profile-text">Аккаунт</span>
        <span className="section__profile-logo"></span>
      </Link>
    </>
  );
}

export default NavTab;
