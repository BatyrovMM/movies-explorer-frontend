import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ isSaved, moviesSection, search, slice, handleShowMore, handleLikeClick, checkLike, handleDislikeClick }) {
  const [hideMoreButton, setHideMoreButton] = React.useState(true);
  const [showSection, setShowSection] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  const [isLoaderActive, setLoaderActive] = React.useState(false)
  const cardsTableTrue = (showSection ? `movies-cards__table movies-cards__table_disable` : `movies-cards__table`);
  const notFoundTrue = (showMessage ? `movies-cards__message` : `movies-cards__message movies-cards__message_disable`)
  const filterLength = moviesSection.filter(search).length;
  const sliceLength = moviesSection.filter(search).slice(0, slice).length;

  React.useEffect(() => {
    setHideMoreButton(false);
    setShowSection(false);
    setLoaderActive(false);
    setShowMessage(false);

    if (sliceLength === 0 && moviesSection.length === 0) {
      setShowSection(true)
      setHideMoreButton(true)
      setLoaderActive(true)
      return; 
    }

    if (sliceLength === 0 && moviesSection.length > 0) {
      setLoaderActive(false);
      setHideMoreButton(true);
      setShowSection(true);
      setShowMessage(true);
      return;
    }

    if (sliceLength >= filterLength) {
      return setHideMoreButton(true)
    }
  }, [search])

  return (
    <section className="movies-cards">
      <div className="wrapper wrapper_movies-cards">
        <div className={cardsTableTrue}>
          {
            moviesSection.filter(search).slice(0, slice).map(movie => 
            <MoviesCard 
              isSaved={isSaved} 
              handleLikeClick={handleLikeClick}
              key={movie.id || movie._id}
              checkLike={checkLike}
              handleDislikeClick={handleDislikeClick}
              {...movie} 
            />)
          }
        </div>
        <Preloader loaderActive={isLoaderActive}/>
        <p className={notFoundTrue}>Ничего не найдено :(</p>
        <button className={!hideMoreButton ? `movies-cards__show-more` : `movies-cards__show-more movies-cards__show-more_disable`} onClick={handleShowMore}>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
