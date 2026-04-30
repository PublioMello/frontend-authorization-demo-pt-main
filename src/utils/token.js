const TOKEN_KEY = "jwt";

// setToken aceita o token como argumento e o adiciona a
// localStorage com a chave TOKEN\_KEY.
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

// getToken recupera e retorna o valor associado a
// TOKEN\_KEY de localStorage.
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
