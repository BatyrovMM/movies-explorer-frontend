export class MoviesApi {
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

  getMovies() {
    return fetch(`${this.baseUrl}/beatfilm-movies/`, {
      headers: this.headers,
    })
    .then(this._response);
  }
}