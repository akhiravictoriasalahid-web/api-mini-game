import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login-reg.css";

function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = () => {

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("email", email);

        alert("Registration successful");

        navigate("/");
    };

    return (
        <div className="card">
            <h2>Create Account</h2>

            <div className="form">

                <input 
                type="username" 
                placeholder="Username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <input 
                type="email" 
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <button onClick={handleRegister}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;