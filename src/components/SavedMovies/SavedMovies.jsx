import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';


function SavedMovies({handleMenu}) {
  return (
    <>
      <Header handleMenu={handleMenu} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
