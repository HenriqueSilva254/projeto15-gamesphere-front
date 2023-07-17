import axios from "axios";



function signUp(body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body)
    return promise
}
function signIn(body){
    const promise = axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
    return promise 
}

const Auth = {signIn, signUp}

export default Auth