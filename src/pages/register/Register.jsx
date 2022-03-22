import React from "react";
import "./register.css"

function Register() {
    return (
        <>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Sk Media</h3>
                        <span className="loginDesc">
                            Connections with people can be dangerous at times, so choose them wisely.
                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Username" className="loginInput" />
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <input placeholder="Confirm Password" className="loginInput" />
                            <button className="loginButton">Sign Up</button>
                            <button className="loginRegisterButton">Log In to your account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register