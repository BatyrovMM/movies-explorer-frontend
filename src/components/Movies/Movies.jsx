import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ handleMenu, moviesSection }) {
  const [searchText, setSearchText] = React.useState('')
  const searchFunc = (data) => {
    return setSearchText(data);
  }

  const searchValue = (value) => {
    if (searchText === '') {
      return value.id < 8
    } else if (value.nameRU.toLowerCase().includes(searchText.toLowerCase())) {
      return value
    }
  }
  return (
    <>
      <Header handleMenu={handleMenu} />
      <SearchForm onSearch={searchFunc}/>
      <MoviesCardList isSaved={false} moviesSection={moviesSection} search={searchValue}/>
      <Footer />
    </>
  );
}

export default Movies;
