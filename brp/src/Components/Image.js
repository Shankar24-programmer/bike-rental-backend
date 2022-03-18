import React, { useState } from 'react'
import '../Components/Image.css'
import './Filter.css'
import { Link } from "react-router-dom"
import { Modal } from "react-bootstrap"
export default function Image() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function modal() {

    //     let a = document.getElementById("filter");
    //     a.removeAttribute("hidden", '')
    // }
    // function modalClose() {

    //     let a = document.getElementById("filter");
    //     a.setAttribute("hidden", '')




    return (
        <div>
            {/* <Navbar /> */}
            {/* <div id="filter" hidden>
                <div className="card" style={{ position: 'fixed', "width": "38rem", "marginTop": "200px", "marginLeft": "410px", "padding": "25px", "backgroundColor": "#f5f2ff" }}>
                    <div className="card-body">
                        <h4 className="card-title">Bike Rental Portal</h4>
                        <h4 className="card-close" style={{ position: 'fixed', cursor: 'pointer', marginLeft: "510px", marginTop: "-38px" }} onClick={modalClose} >X</h4>


                        <form>
                            <div className="form-group">
                                <label for="exampleInput Email1" style={{ "marginBottom": "10px", "marginTop": "10px", "marginRight": "10px" }}>City</label>

                            </div>
                            <select className="form-control">
                                <option>Chennai</option>
                                <option>Bangalore</option>
                                <option>Mumbai</option>
                            </select>
                            <div className="form-group">
                                <label for="exampleInput Password1" style={{ "marginBottom": "10px", "marginTop": "10px" }}>Start Date</label>
                                <input type="Date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInput Password1" style={{ "marginBottom": "10px", "marginTop": "10px" }}>End Date</label>
                                <input type="Date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <button type="submit" className="btn" style={{ "marginBottom": "10px", "marginTop": "25px", "marginLeft": "200px", "width": "120px", "backgroundColor": "black", "color": "white", "fontSize": "16px" }}><Link to="/bikesd" style={{ color: "white", 'textDecoration': 'none' }}>Search</Link></button>
                        </form>
                    </div>
                </div>
            </div> */}




            <header className="jumbotron jumbotron-fluid" style={{"marginTop":"50px"}}>
                <div className="container-fluid text-center">
                    <h5 className="display-4" style={{ "color": "white", "marginTop": "200px", "fontWeight": "bold" }}>Bike Rentals in Popular Cities</h5>
                    <p className="lead pb-2" style={{ "color": "white" }}>As all the good things come at a cost, this city is suffering from the congestion of pollution and day-to-day traffic.</p>
                    <p><a className="btn btn-lg" role="button" style={{"backgroundColor":"rgb(198, 0, 99)","color":"white"}}>
                        <div onClick={handleShow}> Book Now</div></a></p>

                </div>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{"color":"rgb(198, 0, 99)"}}>Bike Rental Portal</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{"padding":"30px"}}>
                    {/* <div id="filter" hidden>
                    <div className="card" style={{ position: 'fixed', "width": "38rem", "marginTop": "200px", "marginLeft": "410px", "padding": "25px", "backgroundColor": "#f5f2ff" }}>
                        <div className="card-body">
                            <h4 className="card-title">Bike Rental Portal</h4>
                            <h4 className="card-close" style={{ position: 'fixed', cursor: 'pointer', marginLeft: "510px", marginTop: "-38px" }}></h4>


                            <form>
                                <div className="form-group">
                                    <label for="exampleInput Email1" style={{ "marginBottom": "10px", "marginTop": "10px", "marginRight": "10px" }}>City</label>

                                </div>
                                <select className="form-control">
                                    <option>Chennai</option>
                                    <option>Bangalore</option>
                                    <option>Mumbai</option>
                                </select>
                                <div className="form-group">
                                    <label for="exampleInput Password1" style={{ "marginBottom": "10px", "marginTop": "10px" }}>Start Date</label>
                                    <input type="Date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInput Password1" style={{ "marginBottom": "10px", "marginTop": "10px" }}>End Date</label>
                                    <input type="Date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>

                                <button type="submit" className="btn" style={{ "marginBottom": "10px", "marginTop": "25px", "marginLeft": "200px", "width": "120px", "backgroundColor": "black", "color": "white", "fontSize": "16px" }}><Link to="/bikesd" style={{ color: "white", 'textDecoration': 'none' }}>Search</Link></button>
                            </form>
                        </div>
                    </div>
                </div> */}
                    <div>

                        <label for="exampleInputEmail1" style={{"marginTop":"5px"}}>City</label>
                        <select className="form-control" style={{"marginTop":"5px"}}>
                            <option>Chennai</option>
                            <option>Bangalore</option>
                            <option>Mumbai</option>
                        </select>
                        <label for="exampleInputEmail1" style={{"marginTop":"10px"}}>Start Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Start Date" style={{"marginTop":"5px"}} />
                        <label for="exampleInputEmail1" style={{"marginTop":"10px"}}>End Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="End Date" style={{"marginTop":"5px"}}/>
                        <button className="btn" style={{"backgroundColor":"rgb(198, 0, 99)", "color":"white", "marginTop":"30px","marginLeft":"160px","width":"120px","height":"40px","marginBottom":"5px"}}><Link to="/bikesd" style={{"color":"white","textDecoration":"none"}}>Search</Link></button>
                    </div>
                </Modal.Body>

                {/* <Modal.Footer>
                    <button className="btn" style={{ "background-color": "red", "color": "white" }} onClick={handleClose}>Close</button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}
