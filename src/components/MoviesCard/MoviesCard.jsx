import React from 'react';
import './MoviesCard.css';

function MoviesCard({ isSaved, id, _id, nameRU, duration, image, trailerLink, trailer, checkLike, handleLikeClick, handleDislikeClick }) {
  const isLike = () => {
    return checkLike.some(item => item.movieId === id)
  };

  const imageState = () => {
    if (typeof image === 'object') {
      return image === null ? `` : `https://api.nomoreparties.co${image.url}`;
    }
    if (typeof image === 'string') {
      return image;
    }
  } 

  function handleLike() {
    handleLikeClick(id)
  }

  function handleDislike() {
    if (id) {
      handleDislikeClick(id)
    } else if (_id) {
      handleDislikeClick(_id)
    }
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
      <button onClick={handleDislike} className="movies-card__delete"></button>
    )
  } else {
    saveState = (
        <button onClick={!isLike() ? handleLike : handleDislike} className={`movies-card__likes ${isLike() ? 'movies-card__likes_active' : ''}`}></button>
    )
  }

  return (
    <div className="movies-card">
      <a href={trailerLink || trailer} target="_blank" rel="noreferrer" className="movies-card__link">
        <img className="movies-card__image" src={imageState()} alt={nameRU}/>
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