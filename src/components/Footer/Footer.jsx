import './Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrapper wrapper_footer">
          <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__table">
            <p className="footer__copyright">© 2020</p>
            <nav className="footer__links">
              <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
              <a href="https://github.com/BatyrovMM" className="footer__link">Github</a>
              <a href="https://ru-ru.facebook.com/" className="footer__link">Facebook</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
