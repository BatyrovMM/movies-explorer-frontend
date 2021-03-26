export const BASE_URL = 'https://batyrov.m.m.students.nomoreparties.space';

const responseCheck = (res) => res.ok ? res.json() : Promise.reject(`Тут вам не MESTO! Поняли? А? А? Ладно, дело в ошибке и вот её код ${res.status}`);

export const signup = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(responseCheck)
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email
    }),
  })
  .then(responseCheck);
}

export const getToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(responseCheck);
}