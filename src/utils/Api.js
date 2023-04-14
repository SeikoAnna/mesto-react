class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  _checkApi(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  setUserInfo({ name, about }) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then((res) => this._checkApi(res))
  }

  setNewAvatar(avatarLink) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatarLink)
    })
      .then((res) => this._checkApi(res))
  }

  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._checkApi(res))
  }

  getCards() {
    return fetch(this._baseUrl + '/cards', {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => this._checkApi(res))
  }

  addNewCard(item) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(item)
    })
      .then((res) => this._checkApi(res))
  }

  addLike(cardId) {
    return fetch(this._baseUrl + `/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then((res) => this._checkApi(res))
  }

  removeLike(cardId) {
    return fetch(this._baseUrl + `/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._checkApi(res))
  }

  deleteCard(cardId) {
    return fetch(this._baseUrl + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._checkApi(res))
  }
}

// class Api {
//     constructor({ baseUrl, headers }) {
//       this._url = baseUrl
//       this._headers = headers
//     }
  
//     _checkResponse(res) {
//       if (res.ok) {
//         return res.json()
//       }
//       return Promise.reject(`Ошибка: ${res.status}`)
//     }
  
//     // Получение карточек
//     getInitialCards() {
//       return fetch(`${this._url}/cards`, {
//         method: 'GET',
//         headers: this._headers,
//       }).then((res) => this._checkResponse(res))
//     }
  
//     // Добавить новую карточку
//     addNewCard(name, link) {
//       return fetch(`${this._url}/cards`, {
//         method: 'POST',
//         headers: this._headers,
//         body: JSON.stringify({
//           name: name,
//           link: link,
//         }),
//       }).then((res) => this._checkResponse(res))
//     }
  
//     // Удалить карточку
//     deleteCard(cardId) {
//       return fetch(`${this._url}/cards/${cardId}`, {
//         method: 'DELETE',
//         headers: this._headers,
//       }).then((res) => this._checkResponse(res))
//     }
  
//     // Лайки
//     addLike(id) {
//       return fetch(`${this._url}/cards/${id}/likes/`, {
//         method: 'PUT',
//         headers: this._headers,
//       }).then((res) => this._checkResponse(res))
//     }
  
//     // Удалить лайки
//     deleteLike(id) {
//       return fetch(`${this._url}/cards/${id}/likes/`, {
//         method: 'DELETE',
//         headers: this._headers,
//       }).then((res) => this._checkResponse(res))
//     }
  
//     // Получeние данных юзера
//     getUserInfo() {
//       return fetch(`${this._url}/users/me`, {
//         method: 'GET',
//         headers: this._headers,
//       }).then((res) => this._checkResponse(res))
//     }
  
//     // Редакт информации юзера
//     editUserInfo(name, info) {
//       return fetch(`${this._url}/users/me`, {
//         method: 'PATCH',
//         headers: this._headers,
//         body: JSON.stringify({
//           name: name,
//           about: info,
//         }),
//       }).then((res) => this._checkResponse(res))
//     }
  
//     // Редакт аватара
//     editUserAvatar(url) {
//       return fetch(`${this._url}/users/me/avatar`, {
//         method: 'PATCH',
//         headers: this._headers,
//         body: JSON.stringify({
//           avatar: url,
//         }),
//       }).then((res) => this._checkResponse(res))
//     }
//   }

  export const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-61",
    headers: {
      authorization: "b975e0db-5f1c-4fce-81c7-76258185d015",
      "Content-Type": "application/json",
    },
  });
  
  