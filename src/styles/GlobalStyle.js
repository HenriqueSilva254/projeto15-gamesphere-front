import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        background-image: url('https://cdn.discordapp.com/attachments/1129133285423980654/1129138765651267855/9b5719d2-481e-410a-bfb6-886d32ad2aea.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        ::-webkit-scrollbar{
        display: none;
      }
    }
    * {
        font-family: 'Rubik Mono One', sans-serif;
        font-style: normal;
        font-weight: 400;
    }
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #F0A24B;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: calc(100% - 820px);
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 64px;
        color: #F0A24B;
    }
    input {
        font-size: 20px;
        width: calc(100% - 850px);
        min-width: 600px;
        border-radius: 5px;
        outline: none;
        border: none;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 90%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: white;
        text-decoration: none;
        padding-top: 30px;
    }
`

export default GlobalStyle