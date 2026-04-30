import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./styles/Login.css";

const Login = ({ handleLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };
  return (
    <div className="login">
      <Logo title={"CryptoDucks"} />
      <p className="login__welcome">
        Esse aplicativo contém informações altamente confidenciais. Faça o login
        ou registre-se para acessar o CryptoDucks.
      </p>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Login:</label>
        <input
          id="email"
          required
          name="email"
          type="email"
          value={data.email}
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
