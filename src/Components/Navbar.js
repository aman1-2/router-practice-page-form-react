import React from "react";
import Logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import {toast} from 'react-hot-toast';

const Navbar = (props) => {

    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to={"/"}>
                <img src={Logo} alt="Logo of the page." height={32} width={160} loading="lazy"></img>
            </Link>

            <nav>
                <ul className="flex gap-x-6 text-slate-100" >
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>Contact</NavLink>
                    </li>
                </ul>
            </nav>

             {/* Button -> Login = Signup = Logout = Dashboard  
             All the four button will be defined but it will depend on the login state
             that which buttion will be showcased at that time.*/}
            <div className="flex items-center gap-x-4 text-slate-100">
                {
                    !isLoggedIn && (
                        <Link to={"/login"}>
                            <button className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border border-slate-700">LogIn</button>
                        </Link>
                    )
                }
                
                {
                    !isLoggedIn && (
                        <Link to={"/signup"}>
                            <button className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border border-slate-700">Signup</button>
                        </Link>
                    )
                }

                {
                    isLoggedIn && (
                        <Link to={"/login"}>
                            <button onClick={()=>{
                                setIsLoggedIn(false);
                                toast.success("Logged Out Sucessfully")
                            }}
                            className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                            LogOut</button>
                        </Link>
                    )
                }

                {
                    isLoggedIn && (
                        <Link to={"/Dashboard"}>
                            <button className="bg-slate-800 py-[8px] px-[12px] rounded-[8px] border border-slate-700">Dashboard</button>
                        </Link>
                    )
                }


            </div>
        </div>
    )
}

export default Navbar;