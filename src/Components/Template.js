import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frame from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({title,description1,description2,image,form,setIsLoggedIn}) =>{
    return(
        <div className="flex h-0 w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
            <div className="w-11/12 max-w-[470px] mx-0 text-white">

                <h1 className="text-slate-50 font-semibold text-[1.875rem] leading-[2.375rem]">
                    {title}
                </h1>

                <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
                    <span className="text-slate-100">{description1}</span>
                    <br></br>
                    <span className="text-blue-400 italic">{description2}</span>
                </p>

                {
                    (form==="login")?(<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>):(<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>)
                }

                {/* This is for the line after the sign-up Button */}
                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-slate-700"></div>
                    <span className="text-slate-700 font-medium leading-[1.375rem]">OR</span>
                    <div className="h-[1px] w-full bg-slate-700"></div>
                </div>

                <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-slate-100 border-slate-700 border px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle />
                    <div>Sign In with Goggle</div>
                </button>
                
            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frame} alt="Frame" width={558} height={504} loading="lazy"></img>
                <img src={image} alt="Pic" width={558} height={504} loading="lazy"
                className="absolute top-4 right-4 "></img>
            </div>
        </div>
    )
}

export default Template;