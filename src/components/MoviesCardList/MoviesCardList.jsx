import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className="movies-cards">
      <div className="wrapper wrapper_movies-cards">
        <div className="movies-cards__table">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        <button className="movies-cards__show-more">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
