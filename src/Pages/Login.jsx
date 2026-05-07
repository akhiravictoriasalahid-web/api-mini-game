import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {

    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (
            username === savedUsername &&
            password === savedPassword
        ) {
            navigate("/game");
        } else {
            alert("Invalid username or password");
        }
    };
    
    return (
        <div className="card">
            <h2>Welcome to My Mini Game</h2>
            <p>Login to Continue</p>

            <div className="form">
                <input 
                type="text" 
                placeholder="Username..." 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>Login</button>

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