import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import '../Components/Bikes.css'
import Navbar from './Navbar'
import { Modal } from "react-bootstrap"
import Cart from './Cart.js'

export default function Bikes({ bikes }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar />

            <div className="bikeshow" style={{ "padding": "2em", "width": "380px", "marginTop": "80px", "border": "solid 3px", "borderColor": "whitesmoke", "marginLeft": "30px" }}>
                <div onClick={handleShow}>      
                <h5 style={{ "marginTop": "-47px", "backgroundColor": "white", "width": "3.5em", "paddingLeft": ".5em" }}>{bikes.name}</h5>
                <img src={bikes.image} className="img-fluid" style={{ "height": "200px", "width": "auto", "cursor":"pointer" }}></img>
                </div>
                <div className="container">
                    <div className="w-50">
                        <h6>Location</h6>
                        <select style={{ "width": "250px", "height": "35px" }}>
                            {bikes.locations.map(location => {
                                return <option value={location}>{location}</option>
                            })}
                        </select>
                        <div className="flex-container">
                            <div className="details">
                                <h6 style={{ "fontWeight": "bold", "marginTop": "20px" }}>Rs.{bikes.prices}/-</h6>
                                <h6 style={{ "color": "#b8b4b4", "marginTop": "-6px" }}>{bikes.limit}</h6>
                            </div>
                            <div className="book">
                                <button type="submit" className="btn-primary" style={{ "marginLeft": "100px", "marginTop": "25px", "width": "80px", "height": "35px" }}><Link to={'/cart'} state={bikes} style={{textDecoration: "none",color: "white"}}>Book</Link></button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{bikes.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={bikes.image} className="img-fluid" style={{ "height": "300px", "width": "auto" }}></img>
                    <h7 style={{"marginBottom":"70px"}}><strong style={{"marginRight":"10px"}}>Price</strong>Rs.{bikes.prices}/- only</h7>
                    <h5>Description</h5>
                    <p>{bikes.description}</p>

                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" style={{ "background-color": "rgb(198, 0, 99)", "color": "white" }} onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
