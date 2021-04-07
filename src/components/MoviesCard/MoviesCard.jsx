import React from 'react';
import './MoviesCard.css';
import zaglushka from '../../images/zaglushka.jpg';

function MoviesCard({ isSaved }) {
  const [isLike, setisLike] = React.useState(false);

  function handleLike() {
    setisLike(!isLike);
  }

  let saveState;

  if (isSaved) {
    saveState = (
      <button className="movies-card__delete"></button>
    )
  } else {
    saveState = (
        <button onClick={handleLike} className={`movies-card__likes ${isLike ? 'movies-card__likes_active' : ''}`}></button>
    )
  }

  return (
  <div className="movies-card">
    <img className="movies-card__image" src={zaglushka} alt="заглушка"/>
    <div className="movies-card__info">
      <div className="movies-card__info-top">
        <p className="movies-card__name">33 слова о дизайне</p>
        {saveState}
      </div>
      <p className="movies-card__length">1ч 47м</p>
    </div>
  </div>
  );
}

export default MoviesCard;