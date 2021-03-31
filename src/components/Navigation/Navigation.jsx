import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen, onClose }) {
  return (
    <>
      <div className={`menu ${isOpen ? 'menu_active' : ''}`}>
        <div className="wrapper wrapper_menu">
          <nav className="menu__navigation">
            <Link to="/" className="menu__navigation-link">Главная</Link>
            <NavLink 
              className="menu__navigation-link" 
              to='/movies' 
              activeClassName="menu__navigation-link_active"
            >Фильмы
            </NavLink>
            <NavLink 
              className="menu__navigation-link" 
              to='/saved-movies' 
              activeClassName="menu__navigation-link_active"
            >Сохранённые фильмы
            </NavLink>
          </nav>
          <Link to="/profile" className="section__profile section__profile_menu">
            <span className="section__profile-text">Аккаунт</span>
            <span className="section__profile-logo"></span>
          </Link>
        </div>
        <button className="menu__close" onClick={onClose}></button>
      </div>
    </>
  );
}

export default Navigation;
