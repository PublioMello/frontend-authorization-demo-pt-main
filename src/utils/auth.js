// Especifique a BASE_URL da API.
export const BASE_URL = "https://api.nomoreparties.co";

// A função register aceita os dados necessários como argumentos
// e envia uma solicitação POST ao endpoint especificado.
export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

// A função authorize aceita os dados necessários como parâmetros.
export const authorize = (identifier, password) => {
  // Uma solicitação POST é enviada para /auth/local.
  return fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // Os parâmetros são envolvidos em um objeto, convertidos em uma string
    // JSON e enviados no body da solicitação.
    body: JSON.stringify({ identifier, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};
