import React from 'react';
import './MoviesCard.css';

function MoviesCard({ isSaved, nameRU, duration, image, trailerLink }) {
  const [isLike, setisLike] = React.useState(false);

  function handleLike() {
    setisLike(!isLike);
  }

  function convertDuration(number) {
    let hours = Math.floor(number / 60);  
    let minutes = number % 60;
    if (hours === 0) {
      return `${minutes}м`; 
    } else {
      return `${hours}ч ${minutes}м`; 
    }
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
      <a href={trailerLink} target="_blank" rel="noreferrer" className="movies-card__link">
        <img className="movies-card__image" src={image === null ? `` : `https://api.nomoreparties.co${image.url}`} alt={nameRU}/>
      </a>
      <div className="movies-card__info">
        <div className="movies-card__info-top">
          <p className="movies-card__name">{nameRU}</p>
          {saveState}
        </div>
        <p className="movies-card__length">{convertDuration(duration)}</p>
      </div>
    </div>
  );
}

export default MoviesCard;