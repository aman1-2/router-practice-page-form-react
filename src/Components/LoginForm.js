import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate,Link } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) =>{

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        });
    }

    function signupHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("SucessFully Logged in");
        navigate("/dashboard");
    }

    return(
        <div className="flex flex-col w-full gap-y-4 mt-6">
            <form onSubmit={signupHandler} className="flex flex-col w-full gap-y-4 mt-6">
                <label className="w-full">
                    <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">Email Address
                    <sup className="text-red-400">*</sup></p>
                    <input type="email"
                    required
                    name="email"
                    value={formData.email}
                    placeholder="Enter Your Email Address" 
                    onChange={changeHandler}
                    className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                </label>

                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password
                        <sup className="text-red-400">*</sup>
                    </p>
                    <input required
                    type={showPassword?("text"):("password")}
                    name="password"
                    value={formData.password}
                    placeholder="Enter Your Password" 
                    onChange={changeHandler}
                    className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>

                    <span onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                        {(showPassword)?(<AiOutlineEyeInvisible fontSize={26} fill='#AFB2BF' />):(<AiOutlineEye fontSize={26} fill='#AFB2BF' />)}
                    </span>

                    <Link to="#">
                        <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">Forgot Password?</p>
                    </Link>
                </label>

                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-slate-900 w-full">
                     Create Account
                </button>   
                
            </form>
        </div>
    )
}

export default LoginForm;