import React from "react";
import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

const Signup = ({setIsLoggedIn}) => {
    return(
        <Template
            title="Join the millions learning to code with StudyNotion for free"
            description1="Build skills for today, tomorrow, and beyond."
            description2="Education to future-proof your career."
            image={signupImg}
            form="signup"
            setIsLoggedIn={setIsLoggedIn}
        ></Template>
       
    )
}

export default Signup;