import { Link } from 'react-router-dom';
import '../Sign/Sign.css';
import signLogo from '../../images/section__logo.png';

function Login() {
  return (
    <>
      <section className="sign">
        <div className="wrapper wrapper_sign">
          <img src={signLogo} alt="logotype" className="sign__logo"/>
          <h1 className="sign__title">Рады видеть!</h1>
          <form className="sign__form">
            <label htmlFor="sign__form-email" className="sign__form-label">E-mail</label>
            <input 
              type="email" 
              id="sign__form-email" 
              className="sign__form-input"
              placeholder="E-mail"
              name="email"
              // value={data.email}
            />
            <label htmlFor="sign__form-password" className="sign__form-label">Пароль</label>
            <input 
              type="password" 
              id="sign__form-password" 
              className="sign__form-input"
              placeholder="Пароль"
              name="password"
              // value={data.password}
            />
            <button className="sign__form-button sign__form-button_login" type="submit">Войти</button>
          </form>
          <p className="sign__question">Ещё не зарегистрированы? <Link to="/signup"
           className="sign__link">Регистрация</Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;
