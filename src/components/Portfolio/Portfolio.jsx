import './Portfolio.css';

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <div className="wrapper wrapper_portfolio">
          <p className="portfolio__title">Портфолио</p>
          <div className="portfolio__links">
            <a href="https://github.com/BatyrovMM/how-to-learn" className="portfolio__link">Статичный сайт</a>
            <a href="https://github.com/BatyrovMM/russian-travel" className="portfolio__link">Адаптивный сайт</a>
            <a href="https://github.com/BatyrovMM/react-mesto-api-full" className="portfolio__link">Одностраничное приложение</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
