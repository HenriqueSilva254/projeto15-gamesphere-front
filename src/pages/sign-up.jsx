import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { styled } from "styled-components";
import Auth from "../services/api";

// axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  function HeadSignUp(e) {
    e.preventDefault();
    const body = {
      name,
      email,
      password,
      age,
    };
    if (password !== passwordConfirm) alert("senhas não conferem");
    else {
      Auth.signUp(body)

        .then(() => {
            console.log("redirect");
            navigate("/sign-in");
        })
        .catch((err) => console.log(err.response.data.message));
    }
  }

  return (
    <>
      <SignUpContainer>
        <h1>GAME SPHERE</h1>
        <form onSubmit={HeadSignUp}>
          <input
            data-test="name"
            placeholder="Nome"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Digite sua idade"
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            data-test="email"
            placeholder="E-mail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            data-test="password"
            placeholder="Senha"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            data-test="conf-password"
            placeholder="Confirme a senha"
            type="password"
            autoComplete="new-password"
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />

          <button data-test="sign-up-submit" type="submit">
            Cadastrar
          </button>
        </form>
        <Link to={"/sign-in"}>Já tem login? Acesse sua conta!</Link>
      </SignUpContainer>
    </>
  );
}

const SignUpContainer = styled.div`
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  background-image: url("https://cdn.discordapp.com/attachments/1129133285423980654/1129138765651267855/9b5719d2-481e-410a-bfb6-886d32ad2aea.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    font-size: 20px;
    width: calc(100% - 850px);
    border-radius: 5px;
    outline: none;
    border: none;
    ::placeholder {
      color: white;
    }
    padding: 15px;
    margin: 1px;
    background-color: #d9d9d9;
    :focus {
      border: 2px solid #ffb6b6;
      margin: 0px;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    color: #f0a24b;
    top: 40px;
    position: absolute;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 90%;
    border-radius: 5px;
    margin-top: 150px;
  }
  button{
    width: fit-content;
  }
`;
