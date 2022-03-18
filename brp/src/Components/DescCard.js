import React from 'react'
import { AiFillCar } from "react-icons/ai";
import { FcCustomerSupport } from "react-icons/fc";
import { BsCashStack } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import '../Components/DescCard.css'
export default function DescCard() {
    return (
        <div>
            <div className="title">
                <h1>We Believe our Transparency</h1>
            </div>
            <div className="card-body1">
                <div className="react-icon1">
                    <AiFillCar className="icon1" />
                </div>
                <h5 className="card-title1">Best vehicles</h5>
                <p className="card-text1">We have our vehicles serviced regularly thus keeping them ready for your use whenever you need to hit the road!</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-body2">
                <BsCashStack className="icon2" />
                <h5 className="card-title1">Deposit safety</h5>
                <p className="card-text1">Your security deposit is safe! It will be returned to you after the trip</p>
            </div>
            <div className="card-body3">
                <FcCustomerSupport className="icon1" />
                <h5 className="card-title1">Customer support</h5>
                <p className="card-text1">Award winning customer support ready to help you 24x7. Call us any time!</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-body4">
                <GiCash className="icon2" />
                <h5 className="card-title1">Lowest prices</h5>
                <p className="card-text1">A wide range of bikes available for the lowest prices across the Internet</p>
            </div>
        </div>
    )
}
