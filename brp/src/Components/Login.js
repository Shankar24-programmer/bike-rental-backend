import React from 'react'
import '../Components/Login.css'
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
export default function Login() {
    return (
        <div className="loginMain" style={{ "marginLeft": "450px" }}>
            <Navbar />
            <form>
                <div className="login-form">
                    <h1 style={{ "marginBottom": "20px" }}>Login</h1>
                    <label style={{ "marginBottom": "15px" }} for="exampleInputEmail1">Email address</label>
                    <input type="email" style={{ "height": "50px" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" style={{ "marginBottom": "30px" }} className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label style={{ "marginBottom": "15px", "marginTop": "18px" }} for="exampleInputPassword1">Password</label>
                    <input type="password" style={{ "height": "50px" }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" style={{ "marginTop": "19px" }} className="form-check-input" id="exampleCheck1" />
                    <label style={{ "marginBottom": "20px", "marginTop": "15px" }} className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Link to="/home">
                    <button type="submit" style={{ "height": "50px", "width": "500px", "backgroundColor": "#c60063", "color": "white" }} className="btn">Login</button>
                </Link>
            </form>
        </div>
    )
}

