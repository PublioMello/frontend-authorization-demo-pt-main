import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { setToken, getToken } from "../utils/token";
import { getUserInfo } from "../utils/api";
import "./styles/App.css";

function App() {
  const [userData, setUserData] = useState({ username: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // handleLogin aceita um parâmetro: um objeto com duas propriedades.
  const handleLogin = ({ username, password }) => {
    // Se o nome de usuário ou a senha estiverem vazios, retorne sem enviar uma solicitação.
    if (!username || !password) {
      return;
    }

    // Passamos o nome de usuário e a senha como argumentos posicionais. A
    // função authorize é configurada para renomear `username` para `identifier`
    // antes de enviar uma solicitação ao servidor, pois é isso que a
    // API espera.
    auth
      .authorize(username, password)
      .then((data) => {
        // Verifique se um JWT está incluso antes de permitir o login do usuário.
        if (data.jwt) {
          setToken(data.jwt);
          setUserData(data.user); // Salve os dados do usuário no estado
          setIsLoggedIn(true); // Permita o login do usuário
          navigate("/ducks"); // Mande o usuário para /ducks
        }
      })
      .catch(console.error);
  };
  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    // Chame a função, passando-a para o JWT.
    api
      .getUserInfo(jwt)
      .then(({ username, email }) => {
        // Se a resposta for bem-sucedida, permita o login do usuário, salve seus
        // dados no estado e mande ele para /ducks.
        setIsLoggedIn(true);
        setUserData({ username, email });
        navigate("/ducks");
      })
      .catch(console.error);
  }, []);

  return (
    <Routes>
      <Route
        path="/ducks"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Ducks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-profile"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <MyProfile userData={userData} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <div className="loginContainer">
            <Login handleLogin={handleLogin} />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div className="registerContainer">
            <Register />
          </div>
        }
      />
      <Route
        path="*"
        element={
          isLoggedIn ? (
            <Navigate to="/ducks" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
