import React from 'react'
import bikes from '../bikesdata'
import Bikes from '../Components/Bikes'
export default function HomeScreen() {
  return (
    <div>
        <div className="row">
            {bikes.map((bikes,index)=>{
                return <div className="col-md-4" key={index}>
                    <div>
                        <Bikes bikes={bikes}/>
                    </div>
                    </div>
            })}
        </div>
    </div>
  )
}
