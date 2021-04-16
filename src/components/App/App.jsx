import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute.jsx';
import { MoviesApi } from '../../utils/MoviesApi';
import { MainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import * as auth from '../../utils/auth';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [moviesSave, setMoviesSave] = React.useState([]);
  const movieArray = localStorage.getItem('movieArray');
  // Регистрация/Логин
  const history = useHistory();
  const [isErrorMessageOpen, setErrorMessageOpen] = React.useState(false);
  const [ErrorMessageText, setErrorMessageText] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [locationUrl, setLocationUrl] = React.useState('');
  const jwt = localStorage.getItem('jwt');
  const location = useLocation();

  const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const mainApi = new MainApi({
    baseUrl: 'https://batyrov.m.m.students.nomoreparties.space',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  })

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function handleErrorClick() {
    setErrorMessageOpen(false)
  }

  function handleErrorTimer() {
    setTimeout(() => {
      setErrorMessageOpen(false)
    }, 6000)
  }

  function errorFunc(message) {
    setErrorMessageOpen(true);
    setErrorMessageText(message);
    handleErrorTimer();
  }

  function handleSearch() {
    if (movies.length >= 1) {
      return
    } else if (movieArray) {
      return setMovies(JSON.parse(movieArray))
    } else {
      return moviesApi.getMovies()
      .then((data) => {
        localStorage.setItem('movieArray', JSON.stringify(data));
        return setMovies(JSON.parse(localStorage.getItem('movieArray')))
      })
      .catch(() => {
        errorFunc('Произошла ошибка');
      })
    }
  }

  function handleUpdateUser(email, name) {
    mainApi.sendUserInfo(email, name)
    .then((data) => {
      setCurrentUser(data);
      errorFunc('Редактирование прошло успешно!');
    })
    .catch(() => {
      errorFunc('Пользователь с такой почтой уже существует');
    });
  }

  function handleMovieLike(id) {
    const isSaved = movies.find((item) => {
      return item.id === id
    })
    return mainApi.saveNewMovie(isSaved)
    .then((data) => {
      setMoviesSave([data, ...moviesSave])
    })
    .catch(() => {
      errorFunc('Что то пошло не так');
    })
  }

  function handleMovieDelete(id) {
    if (typeof id === 'string') {
      return mainApi.deleteNewMovie(id)
      .then(() => {
        const newMovies = moviesSave.filter((movie) => movie._id !== id);
        setMoviesSave(newMovies);
      })
      .catch(() => {
        errorFunc('Что то пошло не так');
      })
    } else {
      const isSaved = moviesSave.find((item) => {
        return item.movieId === id
      })
      return mainApi.deleteNewMovie(isSaved._id)
      .then(() => {
        const newMovies = moviesSave.filter((movie) => movie._id !== isSaved._id);
        setMoviesSave(newMovies);
      })
      .catch(() => {
        errorFunc('Что то пошло не так');
      })
    }
  }

  // Регистрация/Логин
  const handleRegister = (email, password, name) => {
    return auth.signup(email, password, name)
    .then(() => {
      handleLogin(email, password);
      history.push('/movies');
    })
    .catch(() => {
      errorFunc('Пользователь уже зарегистрирован');
    })
  }

  const handleLogin = (email, password) => {
    return auth.signin(email, password)
    .then((res) => {
      if(res.token) {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push('/movies');
      }
    })
    .catch(() => {
      errorFunc('Неправильная почта или пароль');
    })
  }
  
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => console.error(err));
    }
  }
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }

  React.useEffect(() => {
    tokenCheck();
  }, [])

  React.useEffect(() => {
    setLocationUrl(location.pathname)
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
      .then(([user, data]) => {
        setCurrentUser(user);
        setMoviesSave(data);
        history.push(locationUrl)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [loggedIn]);
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <main className="content">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} handleMenu={handleMenuOpen}/>
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            handleMenu={handleMenuOpen} 
            moviesSection={movies} 
            handleSearch={handleSearch}
            handleLikeClick={handleMovieLike}
            checkLike={moviesSave}
            handleDislikeClick={handleMovieDelete}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            handleMenu={handleMenuOpen} 
            moviesSection={moviesSave} 
            handleSearch={handleSearch}
            checkLike={moviesSave}
            handleDislikeClick={handleMovieDelete}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            handleMenu={handleMenuOpen} 
            onEditProfile={handleUpdateUser} 
            signOut={handleSignOut}
          />
          <Route path="/signin">
            <Login onLogin={handleLogin} loggedIn={loggedIn}/>
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} loggedIn={loggedIn}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>
      <Navigation 
        isOpen={isMenuOpen}
        onClose={handleMenuClose} 
      />
      <Preloader active={''}/>
      <ErrorMessage errActive={isErrorMessageOpen} errHide={handleErrorClick} errText={ErrorMessageText}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
