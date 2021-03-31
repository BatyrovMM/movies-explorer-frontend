import Header from '../Header/Header';
import './Profile.css';

function Profile({handleMenu}) {
  return (
    <>
      <Header handleMenu={handleMenu} />
      <section className="profile">
        <div className="wrapper wrapper_profile">
          <h1 className="profile__hello">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__form-table">
              <label className="profile__form-label" htmlFor="profile__form-name">Имя</label>
              <input className="profile__form-input" id="profile__form-name" type="text" placeholder="Имя"/>
            </div>
            <div className="profile__form-line"></div>
            <div className="profile__form-table">
              <label className="profile__form-label" htmlFor="profile__form-email">E-mail</label>
              <input className="profile__form-input" id="profile__form-email" type="email" placeholder="Почта"/>
            </div>
            <button type="submit" className="profile__form-edit">Редактировать</button>
          </form>
          <button className="profile__exit">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  );
}

export default Profile;
