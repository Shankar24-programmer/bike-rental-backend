import React from 'react'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineSanitizer } from "react-icons/md";
import '../Components/OfferCard.css' 
export default function OfferCard() {
    return (
        <div>
            <div className="card1" style={{ "width": "35rem" }}>
                <div className="card-body">
                    <h3 className="card-title">Your Safety is Our Priority</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <AiOutlineSafetyCertificate className="icon3"></AiOutlineSafetyCertificate>
                </div>



                <div className="card2" style={{ "width": "35rem" }}>
                    <div className="card-body">
                        <h3 className="card-title">Sanitized for Every Ride</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <MdOutlineSanitizer className="icon4"></MdOutlineSanitizer>
                    </div>
                </div>

            </div>
        </div>
    )
}
