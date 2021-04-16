import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { validateMail, validatePassword } from '../../utils/validate';
import signLogo from '../../images/section__logo.png';
import '../Sign/Sign.css';

function Login({ onLogin, loggedIn }) {
  const history = useHistory();
  const [data, setData] = useState({
    password: '',
    email: '',
  })
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isMailValid, setMailValid] = React.useState(false);
  const [isPasswordValid, setPasswordValid] = React.useState(false);
  const buttonClass = (isValid ? `sign__form-button sign__form-button_login` : `sign__form-button sign__form-button_disabled sign__form-button_login`)

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    if (name === 'email') {
      setMailValid(validateMail(target, name, value))
    } else if (name === 'password') {
      setPasswordValid(validatePassword(target, name, value))
    }

    setData({
      ...data,
      [name]: value,
    });
    setErrors({
      ...errors, 
      [name]: target.validationMessage 
    });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setData(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setData, setErrors, setIsValid]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = data;
    onLogin(email, password);
    resetForm();
  };

  React.useEffect(() => {
    if (isMailValid && isPasswordValid) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [isMailValid, isPasswordValid])

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/movies')
    }
  }, [loggedIn])

  return (
    <>
      <section className="sign">
        <div className="wrapper wrapper_sign">
          <img src={signLogo} alt="logotype" className="sign__logo"/>
          <h1 className="sign__title">Рады видеть!</h1>
          <form className="sign__form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="sign__form-email" className="sign__form-label">E-mail</label>
            <input 
              type="email" 
              id="sign__form-email" 
              className="sign__form-input"
              placeholder="E-mail"
              name="email"
              value={data.email || ''}
              onChange={handleChange}
            />
            {isMailValid ? null : <span className="sign__form-errors">{errors.email}</span>}
            <label htmlFor="sign__form-password" className="sign__form-label">Пароль</label>
            <input 
              type="password" 
              id="sign__form-password" 
              className="sign__form-input"
              placeholder="Пароль"
              name="password"
              value={data.password || ''}
              onChange={handleChange}
            />
            {isPasswordValid ? null : <span className="sign__form-errors">{errors.password}</span>}
            <button className={buttonClass} type="submit">Войти</button>
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
