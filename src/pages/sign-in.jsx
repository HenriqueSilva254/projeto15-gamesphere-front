import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"


export default function SignInPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // function para fazer login
  function HeadLogin(e) {
    e.preventDefault()

    const body = { email, password }
    const promisse = axios.post(`${process.env.VITE_API_URL}/sign-in`, body )
    .then(res => {
        console.log(res.data)
        navigate("/home")
    })
    .catch(err => console.log(err.response.data.message))
    
  }

  // layout da page login
  return (
    <SingInContainer>
      <h1>GAME SPHERE</h1>
      <form onSubmit={HeadLogin}>
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

        <button data-test="sign-in-submit" >Entrar</button>
      </form>

      <Link to={"/sign-up"}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  overflow-x: hidden;
    margin: 0;
    padding: 0;
    background-image: url('https://cdn.discordapp.com/attachments/1129133285423980654/1129138765651267855/9b5719d2-481e-410a-bfb6-886d32ad2aea.jpg');
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
    background-color: #D9D9D9;
    :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
    }
    }

    h1 {
            font-weight: 700;
            font-size: 64px;
            color: #F0A24B;
            top: 80px;
            position: absolute;
        }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 90%;
        border-radius: 5px;
        margin-top: 350px;
    }
`