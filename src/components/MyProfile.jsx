import NavBar from "./NavBar";
import "./styles/MyProfile.css";

function MyProfile({
  userData = { username: "Nome de usuário aqui", email: "E-mail aqui" },
}) {
  const { username, email } = userData;
  return (
    <>
      <NavBar />
      <div className="my-profile">
        <div className="my-profile__container">
          <div className="my-profile__header">
            <p>Meu perfil</p>
            <hr className="my-profile__rule" />
          </div>
          <div className="my-profile__info">
            <div className="my-profile__user">
              <p className="my-profile__key">Nome de usuário:</p>
              <p className="my-profile__value">{username}</p>
            </div>
            <div className="my-profile__user">
              <p className="my-profile__key">E-mail:</p>
              <p className="my-profile__value">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
