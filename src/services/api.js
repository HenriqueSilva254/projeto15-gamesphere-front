import axios from "axios";

function signUp(body) {
  const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body);
  return promise;
}
function signIn(body) {
  const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body);
  return promise;
}

function purchaseGames(body) {
  const promise = axios.post(
    `${import.meta.env.VITE_API_URL}/purchaseGames`,
    body
  );
  return promise;
}
function getLibrary(user) {
  const promise = axios.get(`${import.meta.env.VITE_API_URL}/library`, user);

  return promise;
}

const Auth = { signIn, signUp, purchaseGames, getLibrary };

export default Auth;
