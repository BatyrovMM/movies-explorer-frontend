import './Techs.css';

function Techs() {
  return (
    <>
    <section className="techs">
      <div className="wrapper wrapper_techs">
        <p className="section-name section-name_techs">Технологии</p>
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__table">
          <div className="techs__item">HTML</div>
          <div className="techs__item">CSS</div>
          <div className="techs__item">JS </div>
          <div className="techs__item">React</div>
          <div className="techs__item">Git</div>
          <div className="techs__item">Express.js</div>
          <div className="techs__item">mongoDB</div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Techs;
