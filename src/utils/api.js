export const BASE_URL = "https://api.nomoreparties.co";

// getContent aceita o token como argumento.
export const getUserInfo = (token) => {
  // Envie uma solicitação GET a /users/me
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Especifique um cabeçalho de autorização com um valor
      // formatado adequadamente.
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};
