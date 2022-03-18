import React from 'react'
import './Testimonials.css'
export default function Testimonials() {
    return (
        <div>
            <div className="title">
                <h1>
                    Discover the largest and most trusted
                </h1>
            </div>
            <div className="sub-title">
                <h1>bike rental company</h1>
            </div>
            <section className="home-testimonial-bottom">
                <div className="container testimonial-inner">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc bg-white">
                                    <div className="tour-text color-grey-3 text-center">“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7FfWrqJ5ro7SdxlBsnmCo_mwrnRly5mHUg&usqp=CAU")} alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Muthu Shankar</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc bg-white">
                                    <div className="tour-text color-grey-3 text-center">“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7FfWrqJ5ro7SdxlBsnmCo_mwrnRly5mHUg&usqp=CAU")} alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Vigneshwaran</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc bg-white">
                                    <div className="tour-text color-grey-3 text-center">“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7FfWrqJ5ro7SdxlBsnmCo_mwrnRly5mHUg&usqp=CAU")} alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Sathish Kumar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
