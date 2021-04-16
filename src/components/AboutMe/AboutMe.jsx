import './AboutMe.css';

function AboutMe() {
  return (
    <>
      <section className="about-me">
        <div className="wrapper wrapper_about-me">
          <p className="section-name section-name_techs">Студент</p>
          <div className="about-me__table">
            <div className="about-me__info">
              <h2 className="about-me__title">Виталий</h2>
              <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__text">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
              <div className="about-me__links">
                <a target="_blank" rel="noreferrer" href="https://ru-ru.facebook.com/" className="about-me__link">Facebook</a>
                <a target="_blank" rel="noreferrer" href="https://github.com/BatyrovMM" className="about-me__link">Github</a>
              </div>
            </div>
            <img src={``} alt="" className="about-me__image"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
