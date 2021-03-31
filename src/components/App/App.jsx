import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }
  return (
    <div className="page">
      <main className="content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/movies">
              <Movies handleMenu={handleMenuOpen}/>
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
    </div>
  );
}

export default App;
