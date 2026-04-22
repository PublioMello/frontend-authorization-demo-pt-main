import "./styles/Logo.css";
import logo from "../assets/images/logo.png";

function Logo(props) {
  return (
    <div className="logo">
      <div className="logo__container">
        <img className="logo__image" src={logo} alt="CryptoDucks logo" />
        {props.title && <p className="logo__title">{props.title}</p>}
      </div>
    </div>
  );
}

export default Logo;
