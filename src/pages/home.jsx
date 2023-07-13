import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function HomePage() {

    const navigate = useNavigate();

    function singIn(){
        navigate("/sign-in")
    }
return (
        <BotãoPersonalizado onClick={singIn}>Faça Login</BotãoPersonalizado>
    )
}

const BotãoPersonalizado = styled.button`
    width: 170px;
    height: 70px;
    background-color: white;
    color: black;
`