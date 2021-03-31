import './AboutProject.css';

function AboutProject() {
  return (
    <>
      <section className="about-project">
        <div className="wrapper wrapper_about-project">
          <p className="section-name section-name_about-project">О проекте</p>
          <div className="about-project__info">
            <div className="about-project__info-column">
              <p className="about-project__info-title">Дипломный проект включал 5 этапов</p>
              <p className="about-project__info-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about-project__info-column">
              <p className="about-project__info-title">На выполнение диплома ушло 5 недель</p>
              <p className="about-project__info-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className="about-project__progress">
             <div className="about-project__progress-column-left">
               <p className="about-project__progress-date">1 неделя</p>
               <p className="about-project__progress-name">Back-end</p>
             </div>
             <div className="about-project__progress-column-right">
                <p className="about-project__progress-date">4 недели</p>
                <p className="about-project__progress-name">Front-end</p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutProject;
