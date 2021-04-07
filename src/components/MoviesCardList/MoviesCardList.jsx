import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ isSaved }) {
  return (
    <section className="movies-cards">
      <div className="wrapper wrapper_movies-cards">
        <div className="movies-cards__table">
          <MoviesCard isSaved={isSaved}/>
          <MoviesCard isSaved={isSaved}/>
          <MoviesCard isSaved={isSaved}/>
          <MoviesCard isSaved={isSaved}/>
          <MoviesCard isSaved={isSaved}/>
          <MoviesCard isSaved={isSaved}/>
        </div>
        <button className="movies-cards__show-more">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
