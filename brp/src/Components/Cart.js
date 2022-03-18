import React, { useState } from 'react'
import Navbar from './Navbar'
import '../Components/Cart.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { Modal } from "react-bootstrap"
export default function Cart() {
  const { state } = useLocation();
  console.log(state)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <div>
      <Navbar />
      <div className="card" style={{ "width": "55rem", "height": "55rem", "marginBottom": "80px", "marginLeft": "270px", "marginTop": "100px", "border": "solid 3px", "borderColor": "whitesmoke", "padding": "40px" }}>
        <div className="cart">
          <div className="cart-imagebox">
            <div onClick={handleShow}>
              <img className="cart-image" src={state.image} alt="bike image" style={{ "cursor": "pointer" }} />
            </div>
          </div>
          <div className="cart-description">
            <p style={{ "marginBottom": "-50px" }}>Bike Model:</p>
            <p className="bike-name" style={{ "marginBottom": "-40px", "fontWeight": "bold" }}>{state.name}</p>
            <div className="cart-descriptionside">
              <div className="city-price">
                <p className="side-desc">
                  <p className="city-head">Location</p>
                  <p className="cityname-desc">
                    <select style={{ "width": "250px", "height": "35px", "marginTop": "30px" }}>
                      {state.locations.map(location => {
                        return <option value={location}>{location}</option>
                      })}
                    </select>

                  </p>
                  <p className="type">Rent</p>
                  <p className="bike-price">
                    Rs.{state.prices}/-
                  </p>
                </p>
              </div>

              <div clasName="deposit">
                <p className="advance">
                  Deposit
                </p>
                <p className="amount">
                  Rs.1,000.00
                </p>
                <p className="amount-desc">
                  Per vehicle
                </p>
              </div>

            </div>

          </div>

        </div>
        <div className="row" style={{ "marginLeft": "285px", "marginTop": "-20px" }}>



          <div className="col-lg-3" style={{ "width": "150px" }}>
            <div className="input-group">
              <span className="input-group-btn">
                <button type="button" className="quantity-left-minus btn  btn-number" data-type="minus" data-field="" style={{ "width": "40px", "height": "38px", "backgroundColor": "#c60063" }}>
                  <FaMinus style={{ "color": "white" }} />
                </button>
              </span>
              <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" min="1" max="100" />
              <span className="input-group-btn">
                <button type="button" className="quantity-right-plus btn  btn-number" data-type="plus" data-field="" style={{ "width": "40px", "height": "38px", "backgroundColor": "#c60063" }}>
                  <FaPlus style={{ "color": "white", "align": "center" }} />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="line" style={{ "color": "#f0f0f5", "marginTop": "30px" }}>________________________________________________________________________________________________</div>
        <p className="policy" style={{ "fontWeight": "bold", "marginTop": "30px" }}>Partner T & C</p>
        <p>
          <ul>
            <li>The rider needs to present a valid Driving License at the time of picking up the vehicle.</li>
            <li>At the time of pick up of vehicle Original ID proof (Voter ID/Aadhaar Card/Passport) of the rider need to be submitted.</li>
            <li>E-Aadhar card/smart Aadhar card will not be accepted.</li>
            <li>Only 1 complimentary helmet will be provided.</li>
            <li>Fuel charges are not included.</li>
            <li>Sufficient fuel will be provided with the vehicle to reach the nearest Petrol station.</li>
            <li>The customer is liable to pay Service charges as per authorized Service Center, In case of damage to the vehicle.</li>
          </ul>
        </p>
        <div onClick={handleShow1}>
          <button type="submit" className="btn" style={{ "width": "800px", "height": "55px", "backgroundColor": "#c60063", "color": "white" }}>Book Now</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{state.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={state.image} className="img-fluid" style={{ "height": "300px", "width": "auto" }}></img>
          <h7 style={{ "marginBottom": "70px" }}><strong style={{ "marginRight": "10px" }}>Price</strong>Rs.{state.prices}/- only</h7>
          <h5>Description</h5>
          <p>{state.description}</p>

        </Modal.Body>

        <Modal.Footer>
          <button className="btn" style={{ "background-color": "rgb(198, 0, 99)", "color": "white" }} onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>


      <Modal show={show1} onHide={handleClose1}>

        <Modal.Header>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>             
        <Modal.Body>
            <div className="pop">Thank you!</div>
            <div className="texting">You order has been successfully placed.</div>

        </Modal.Body>


      </Modal>
    </div>
  )
}
