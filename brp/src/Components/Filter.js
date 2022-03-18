import React from 'react'
// import Navbar from './Navbar'
import Image from './Image'
import './Filter.css'
import { Link } from "react-router-dom"

export default function Filter() {
    
    return (
        <div>
            {/* <Navbar /> */}
            <div className="filter" hidden>
                <div className="card" style={{ position: 'fixed', "width": "38rem", "marginTop": "200px", "marginLeft": "410px", "padding": "25px", "backgroundColor":"#f5f2ff"}}>
                    <div className="card-body">
                        <h4 className="card-title">Bike Rental Portal</h4>
                        <form>
                            <div className="form-group">
                                <label for="exampleInput Email1" style={{ "marginBottom": "10px", "marginTop": "10px", "marginRight": "10px" }}>City</label>

                            </div>
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="form-group">
                                <label for="exampleInput Password1" style={{ "marginBottom": "10px", "marginTop": "10px" }}>Start Date</label>
                                <input type="Date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInput Password1" style={{ "marginBottom": "10px", "marginTop": "10px" }}>End Date</label>
                                <input type="Date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <button type="submit" className="btn" style={{ "marginBottom": "10px", "marginTop": "25px", "marginLeft": "200px", "width": "120px","backgroundColor":"black","color":"white", "fontSize":"16px"}}><Link to="/bikesd" style={{'textDecoration': 'none'}}>Search</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
