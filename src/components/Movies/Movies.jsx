import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ handleMenu, handleSearch, moviesSection, handleLikeClick, checkLike, handleDislikeClick }) {
  const [searchText, setSearchText] = React.useState('');
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [sizeScreen, setSizeScreen] = React.useState(window.innerWidth);
  const [sliceShow, setSliceShow] = React.useState(() => {
    return 0;
  });

  const handleSize = () => {
    setSizeScreen(window.innerWidth)
  }

  const searchFunc = (data) => {
    return setSearchText(data);
  }

  const checkboxFunc = (boolean) => {
    return setCheckboxState(boolean)
  }

  const searchValue = (value) => {
    const searcOnName = value.nameRU.toLowerCase().includes(searchText.toLowerCase());
    const searchOnDuration = value.duration <= 40;
    
    if (!checkboxState) {
      if (searchText === '') {
        return;
      } else if (searcOnName) {
        return value;
      } 
    } else {
      if (searchText === '') {
        return;
      } else if (searcOnName && searchOnDuration) {
        return value;
      }
    }
  }

  const sliceValue = () => {
    if (sizeScreen > 768) {
      return setSliceShow(12)
    } else if (sizeScreen > 480) {
      return setSliceShow(8)
    } else {
      return setSliceShow(5)
    }
  }

  const showMore = () => {
    if (sizeScreen > 768) {
      return setSliceShow((prevSliceShow) => prevSliceShow + 3)
    } else if (sizeScreen > 480) {
      return setSliceShow((prevSliceShow) => prevSliceShow + 2)
    } else {
      return setSliceShow((prevSliceShow) => prevSliceShow + 2)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleSize);
    sliceValue()

    return () => {
      window.removeEventListener('resize', handleSize);
    }

  }, [sizeScreen])

  return (
    <>
      <Header handleMenu={handleMenu} />
      <SearchForm startSearch={searchFunc} onSearch={handleSearch} onCheckbox={checkboxFunc}/>
      <MoviesCardList 
        isSaved={false} 
        moviesSection={moviesSection} 
        search={searchValue} 
        slice={sliceShow} 
        handleShowMore={showMore} 
        handleLikeClick={handleLikeClick}
        checkLike={checkLike}
        handleDislikeClick={handleDislikeClick}
      />
      <Footer />
    </>
  );
}

export default Movies;
