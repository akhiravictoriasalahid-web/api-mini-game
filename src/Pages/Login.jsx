import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {
    return (
        <div className="card">
            <h2>Welcome to My Mini Game</h2>
            <p>Login to Continue</p>

            <div className="form">
                <input type="text" id="username" placeholder="Username..." />
                <input type="password" id="password" placeholder="Password" />

                <button>LOgin</button>

                <p className="signup-text">
                    Don't have an account?
                    <span onClick={() => navigate("/register")}>
                        Register here
                    </span> 
                </p>
            </div>
        </div>
    )
}

export default Login;