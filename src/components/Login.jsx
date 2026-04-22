import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./styles/Login.css";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <Logo title={"CryptoDucks"} />
      <p className="login__welcome">
        Esse aplicativo contém informações altamente confidenciais. Faça o login
        ou registre-se para acessar o CryptoDucks.
      </p>
      <form className="login__form">
        <label htmlFor="username">Login:</label>
        <input
          id="username"
          required
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          required
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Login
          </button>
        </div>
      </form>

      <div className="login__signup">
        <p>Ainda não é membro?</p>
        <Link to="/register" className="signup__link">
          Inscreva-se aqui
        </Link>
      </div>
    </div>
  );
};

export default Login;
