import React from 'react'
import './City.css'
export default function City() {
    return (
        <div>
            <h1 className="text" style={{"marginTop":"180px"}}>Top cities we serve in India</h1>
            <div className="image-grid" style={{ "marginTop": "-150px", "marginBottom": "150px" }}>
                
                <img src={require("/Users/muthusankar/Desktop/Bike Rental Portal Dynamic/brp/src/assets/chennai.jpg")} style={{ "width": "300px", "height": "200px", "marginTop": "200px", "marginLeft": "200px" }} className="rounded float-left" alt="..." />
                
                <img src={require("/Users/muthusankar/Desktop/Bike Rental Portal Dynamic/brp/src/assets/bangalore.jpg")} style={{ "width": "300px", "height": "200px", "marginTop": "200px", "marginLeft": "100px" }} className="rounded float-right" alt="..." />
               
                <img src={require("/Users/muthusankar/Desktop/Bike Rental Portal Dynamic/brp/src/assets/mumbai.jpg")} style={{ "width": "300px", "height": "200px", "marginTop": "200px", "marginLeft": "100px" }} className="rounded float-right" alt="..." />
            </div>

        </div>
    )
}
