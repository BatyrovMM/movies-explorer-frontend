import { Link } from 'react-router-dom';
import headerLogo from '../../images/section__logo.png';
import NavTab from '../NavTab/NavTab';
import './Header.css';

function Header({onPage, handleTheme, handleMenu}) {
  let whatPage;

  if (onPage === '/') {
    whatPage = (
      <nav className="header__sign">
        <Link to='/signup' className="header__signup">Регистрация</Link>
        <Link to='/signin' className="header__signin">Войти</Link>
      </nav>
    )
  } else {
    whatPage = (
      <>
        <NavTab />
        <button className="header__menu-button" onClick={handleMenu}></button>
      </>
    )
  }

  return (
    <>
      <header className={`header ${handleTheme ? '' : 'header_main'}`}>
        <div className="wrapper wrapper_header">
          <Link to='/'>
            <img className="header__logo" src={headerLogo} alt="logotype"/>
          </Link>
          {whatPage}
        </div>
      </header>
    </>
  );
}

export default Header;
