import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { setToken, getToken } from "../utils/token";
import { getUserInfo } from "../utils/api";
import "./styles/App.css";
import * as auth from "../utils/auth";

function App() {
  const [userData, setUserData] = useState({ username: "", email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const handleRegistration = ({
    username,
    email,
    password,
    confirmPassword,
  }) => {
    if (password === confirmPassword) {
      auth
        .register(username, password, email)
        .then(() => {
          navigate("/login");
        })
        .catch(console.error);
    }
  };

  // handleLogin aceita um parâmetro: um objeto com duas propriedades.
  const handleLogin = ({ email, password }) => {
    // Se o nome de usuário ou a senha estiverem vazios, retorne sem enviar uma solicitação.
    if (!email || !password) {
      return;
    }

    // Passamos o nome de usuário e a senha como argumentos posicionais. A
    // função authorize é configurada para renomear `username` para `identifier`
    // antes de enviar uma solicitação ao servidor, pois é isso que a
    // API espera.
    auth
      .authorize(email, password)
      .then((data) => {
        // Verifique se um JWT está incluso antes de permitir o login do usuário.
        if (data.jwt) {
          setToken(data.jwt);
          setUserData(data.user); // Salve os dados do usuário no estado
          setIsLoggedIn(true); // Permita o login do usuário

          // Depois do login, em vez de sempre acessar /ducks,
          // navegue até o local armazenado no estado. Se
          // não houver um local armazenado, vamos redirecionar
          // para /ducks por padrão.
          const redirectPath = location.state?.from?.pathname || "/ducks";
          navigate(redirectPath);
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
    getUserInfo(jwt)
      .then(({ username, email }) => {
        // Se a resposta for bem-sucedida, permita o login do usuário, salve seus
        // dados no estado e mande ele para /ducks.
        setIsLoggedIn(true);
        setUserData({ username, email });
        // Remova a chamada ao hook navigate(): ela não é
        // mais necessária.
        // navigate("/ducks");
      })
      .catch(console.error);
  }, []);

  return (
    <Routes>
      <Route
        path="/ducks"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Ducks setIsLoggedIn={setIsLoggedIn} />
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
          <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
            <div className="loginContainer">
              <Login handleLogin={handleLogin} />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          //Pq?
          <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
            <div className="registerContainer">
              <Register handleRegistration={handleRegistration} />
            </div>
          </ProtectedRoute>
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
