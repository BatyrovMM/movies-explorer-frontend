import './MoviesCard.css';

function MoviesCard() {
  return (
  <div className="movies-card">
    <img className="movies-card__image" src="" alt=""/>
    <div className="movies-card__info">
      <div className="movies-card__info-top">
        <p className="movies-card__name">33 слова о дизайне</p>
        <button className="movies-card__likes"></button>
      </div>
      <p className="movies-card__length">1ч 47м</p>
    </div>
  </div>
  );
}

export default MoviesCard;
