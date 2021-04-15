import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { validateMail, validateName } from '../../utils/validate';
import './Profile.css';

function Profile({ handleMenu, onEditProfile, signOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [data, setData] = useState({
    email: currentUser.email,
    name: currentUser.name,
  })
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isNameValid, setNameValid] = React.useState(false)
  const [isMailValid, setMailValid] = React.useState(false);
  const buttonClass = (isValid ? `profile__form-edit` : `profile__form-edit profile__form-edit_disabled`)
  
  const handleChange = (event) => {
    const target = event.target
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });

    if (name === 'name') {
      setNameValid(validateName(target, name, value));
    } else if (name === 'email') {
      setMailValid(validateMail(target, name, value));
    }

    setErrors({
      ...errors, 
      [name]: target.validationMessage,
    });
  };

  const resetForm = useCallback(
    (newErrors = {}, newIsValid = false) => {
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { email, name } = data;
    onEditProfile(email, name);
    resetForm();
  };

  React.useEffect(() => {
    if (isMailValid && isNameValid) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [isMailValid, isNameValid])

  return (
    <>
      <Header handleMenu={handleMenu} />
      <section className="profile">
        <div className="wrapper wrapper_profile">
          <h1 className="profile__hello">Привет, {currentUser.name}!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__form-table">
              <label className="profile__form-label" htmlFor="profile__form-name">Имя</label>
              <input className="profile__form-input" 
                id="profile__form-name" 
                type="text" 
                placeholder="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            {isNameValid ? null : <span className="sign__form-errors">{errors.name}</span>}
            <div className="profile__form-line"></div>
            <div className="profile__form-table">
              <label className="profile__form-label" htmlFor="profile__form-email">E-mail</label>
              <input 
                className="profile__form-input" 
                id="profile__form-email" 
                type="email" 
                placeholder="Почта"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
                {isMailValid ? null : <span className="sign__form-errors">{errors.email}</span>}
            <button type="submit" className={buttonClass}>Редактировать</button>
          </form>
          <Link to='/signin' className="profile__exit" onClick={signOut}>Выйти из аккаунта</Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
