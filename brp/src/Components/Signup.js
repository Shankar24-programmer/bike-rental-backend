import React from 'react'
import Navbar from '../Components/Navbar'

import { Link } from "react-router-dom"
export default function Signup() {
    return (
        <div>
            <Navbar />
            <form className="signup-form" style={{ "marginTop": "100px", "width": "500px", "marginLeft": "430px" }}>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <label style={{ "marginBottom": "10px", "marginTop": "20px" }}>First name</label>
                    <input type="text" className="form-control" style={{ "marginBottom": "20px", "height": "50px" }} placeholder="First name" />
                </div>
                <div className="form-group">
                    <label style={{ "marginBottom": "10px" }}>Last name</label>
                    <input type="text" className="form-control" style={{ "marginBottom": "20px", "height": "50px" }} placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label style={{ "marginBottom": "10px" }}>Email address</label>
                    <input type="email" className="form-control" style={{ "marginBottom": "20px", "height": "50px" }} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label style={{ "marginBottom": "10px" }}>Password</label>
                    <input type="password" className="form-control" style={{ "marginBottom": "20px", "height": "50px" }} placeholder="Enter password" />
                </div>
                <Link to="/login">
                    <button type="submit" className="btn btn-primary btn-block" style={{ "width": "500px", "marginBottom": "10px", "height": "50px", "backgroundColor": "#c60063", "color": "white" }}>Sign Up</button>
                </Link>
                <p className="forgot-password text-right">
                    <p>Already registered <Link to="/login">sign in?</Link></p>
                </p>
            </form>
        </div>
    )
}
