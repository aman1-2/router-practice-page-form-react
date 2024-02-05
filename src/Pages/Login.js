import React from "react";
import Template from '../Components/Template';
import LoginImg from "../assets/login.png";


const Login = ({setIsLoggedIn}) => {

    return(
        <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        image={LoginImg}
        form="login"
        setIsLoggedIn={setIsLoggedIn}
        ></Template>
    )
}

export default Login;