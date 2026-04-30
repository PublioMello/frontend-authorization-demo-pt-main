// Nova importação – useLocation
import { Navigate, useLocation } from "react-router-dom";

// Nova prop – anonymous. Essa prop vai ser usada para indicar rotas
// que podem ser acessadas anonimamente (ou seja, sem autorização).
// As duas rotas "anônimas" neste aplicativo são /register
// e /login.
export default function ProtectedRoute({
  isLoggedIn,
  children,
  anonymous = false,
}) {
  // Invoque o hook useLocation e acesse o valor da
  // propriedade 'from' do seu objeto de estado. Se não houver propriedade 'from',
  // usamos "/" por padrão.
  const location = useLocation();
  const from = location.state?.from || "/";

  // Se o usuário estiver logado, vamos redirecioná-lo
  // para longe das rotas anônimas.
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  // Se o usuário não estiver logado e tentar acessar uma rota que
  // requer autorização, vamos redirecioná-lo para a rota /login.
  if (!anonymous && !isLoggedIn) {
    // Ao redirecionar para /login, definimos a propriedade
    // state.from dos objetos de local para armazenar o valor de local atual.
    // Isso nos permite redirecionar os usuários de modo adequado depois do
    // login.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Caso contrário, exiba os elementos filhos da rota atual.
  return children;
}
