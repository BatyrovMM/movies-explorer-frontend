import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ isSaved, moviesSection, search }) {
  const [load, setLoad] = React.useState(1)
  const [hide, setHide] = React.useState(false)


  return (
    <section className="movies-cards">
      <div className="wrapper wrapper_movies-cards">
        <div className="movies-cards__table">
          {
            moviesSection.filter(search).map(movie => <MoviesCard isSaved={isSaved} key={movie.id} {...movie} />)
          }
        </div>
        {/* <button className={!hide ? `movies-cards__show-more` : `movies-cards__show-more movies-cards__show-more_disable`} onClick={showMore}>Ещё</button> */}
      </div>
    </section>
  );
}

export default MoviesCardList;
