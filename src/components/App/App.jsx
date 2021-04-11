import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MoviesApi } from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import Preloader from '../Preloader/Preloader';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isPreloaderOpen, setPreloaderOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);

  const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  React.useEffect(() => {
    setPreloaderOpen(true)
    moviesApi.getMovies()
    .then(data => {
      setMovies(data)
      console.log(data[0].image.url)
      console.log(data)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setPreloaderOpen(false)
    })
  }, [])
  
  return (
    <div className="page">
      <main className="content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies">
              <Movies handleMenu={handleMenuOpen} moviesSection={movies}/>
            </Route>
            <Route path="/saved-movies">
              <SavedMovies handleMenu={handleMenuOpen}/>
            </Route>
            <Route path="/profile">
              <Profile handleMenu={handleMenuOpen}/>
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
      <Navigation 
        isOpen={isMenuOpen}
        onClose={handleMenuClose} 
      />
      <Preloader active={isPreloaderOpen}/>
    </div>
  );
}

export default App;
