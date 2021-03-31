import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({handleMenu}) {
  return (
    <>
      <Header handleMenu={handleMenu} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
