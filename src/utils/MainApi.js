export class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _response(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`error${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
    .then(this._response);
  }

  sendUserInfo(email, name) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        email,
        name,
      })
    })
    .then(this._response);
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(this._response);
  }

  saveNewMovie(data) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        trailer: data.trailerLink,
        image: `https://api.nomoreparties.co${data.image.url}`, 
        movieId: data.id,
      })
    })
    .then(this._response);
  }

  deleteNewMovie(_id) {
    return fetch(`${this.baseUrl}/movies/${_id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(this._response);
  }
}