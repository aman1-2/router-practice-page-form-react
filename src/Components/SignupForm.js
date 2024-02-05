import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignupForm = ({setIsLoggedIn}) =>{

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    let navigate = useNavigate();
    
    const [showPassword,setShowPassword] = useState(false);

    const [showConfirmPassword,setShowConfirmPassword] = useState(false);

    const [accountType,setAccountType] = useState("student");

    function changeHandler(event){
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        });
    }

    function createAccountHandler(event){
        event.preventDefault();

        if(formData.password !== formData.confirmPassword){
            toast.error("Password Do not Match!!");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created Sucessfully");
        
        navigate("/dashboard");
    }

    return(
        <div>
            {/* Creating the Student and Instructor Tab */}
            <div className="flex bg-slate-800 p-1 gap-x-1 rounded-full max-w-max mt-4">
                <button onClick={()=>setAccountType("student")}
                    className={`${ accountType === "student"
                    ? "bg-slate-900 text-slate-50"
                    : "bg-transparent text-slate-200 "
                    } py-2 px-5 rounded-full transition-all`}>Student
                </button>
                <button onClick={()=>setAccountType("instructor")}
                    className={`${
                    accountType === "instructor"
                    ? "bg-slate-900 text-slate-50"
                    : "bg-transparent text-slate-200 "
                    } py-2 px-5 rounded-full transition-all`}>Instructor
                </button>
            </div>

            <form onSubmit={createAccountHandler}>

                <div className="flex gap-x-4 mt-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-50  mb-1 leading-[1.375rem]">First Name
                            <sup className="text-red-400">*</sup>
                        </p>
                        <input type="text"
                        required
                        name="firstName"
                        value={formData.firstName}
                        placeholder="Enter First Name" 
                        onChange={changeHandler}
                        className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"/>
                    </label>

                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-50  mb-1 leading-[1.375rem]">Last Name
                            <sup className="text-red-400">*</sup>
                        </p>
                        <input type="text"
                        required
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Enter Last Name" 
                        onChange={changeHandler}
                        className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>
                    </label>
                </div>

                <label className="w-full mt-4">
                    <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">Email Address
                        <sup className="text-red-400">*</sup>
                    </p>
                    <input type="email"
                    autoComplete="abc"
                    required
                    name="email"
                    value={formData.email}
                    placeholder="Enter Your Email Address" 
                    onChange={changeHandler}
                    className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"/>
                </label>

                <div className="flex gap-x-4 mt-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">Create Password
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
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">Confirm Password
                            <sup className="text-red-400">*</sup>
                        </p>
                        <input required
                        type={showConfirmPassword?("text"):("password")}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm Password" 
                        onChange={changeHandler}
                        className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/>

                        <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-[38px] cursor-pointer ">
                            {(showConfirmPassword)?(<AiOutlineEyeInvisible fontSize={26} fill='#AFB2BF' />):(<AiOutlineEye fontSize={26} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div> 

                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-slate-900 w-full">
                     Create Account
                </button>              

            </form>

        </div>
    )
}

export default SignupForm;