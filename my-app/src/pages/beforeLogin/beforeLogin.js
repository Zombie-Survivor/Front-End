import React from "react"
import "./beforeLogin.css"
import { useNavigate } from "react-router-dom";



export default function BeforeLogin() {
    const navigate = useNavigate();


    return (
        <div >
            {/* <h1>Zombie Survival</h1> */}
            <div className="options" onClick={(e) => navigate("/signUp")}> Sign Up</div>
            <div className="options" onClick={(e) => navigate("/login")}> Login</div>
        </div>
    )
}