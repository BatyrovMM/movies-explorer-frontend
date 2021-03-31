import { Link } from 'react-router-dom';
import '../Sign/Sign.css';
import signLogo from '../../images/section__logo.png';

function Register() {
  return (
    <>
      <section className="sign">
        <div className="wrapper wrapper_sign">
          <img src={signLogo} alt="logotype" className="sign__logo"/>
          <h1 className="sign__title">Добро пожаловать!</h1>
          <form className="sign__form">
            <label htmlFor="sign__form-name" className="sign__form-label">Имя</label>
            <input 
              type="text" 
              id="sign__form-name" 
              className="sign__form-input"
              placeholder="Имя"
              name="name"
              // value={data.name}
            />
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
            <button className="sign__form-button" type="submit">Зарегистрироваться</button>
          </form>
          <p className="sign__question">Уже зарегистрированы? <Link to="/signin" className="sign__link">Войти</Link></p>
        </div>
      </section>
    </>
  );
}

export default Register;
