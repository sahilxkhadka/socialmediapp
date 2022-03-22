import React from "react";
import "./login.css"

function Login() {
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
                            <input placeholder="Email" className="loginInput" />
                            <input placeholder="Password" className="loginInput" />
                            <button className="loginButton">Log In</button>
                            <span className="loginForgot">Forgot Password</span>
                            <button className="loginRegisterButton">Create a new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login