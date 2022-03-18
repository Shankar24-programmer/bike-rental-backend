import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";
import { GrGoogle } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go"
export default function Footer() {
    return (
        <div>
            <footer className="text-center text-white" style={{"background-color": "#f1f1f1"}}>
                {/* <!-- Grid container --> */}
                <div className="container pt-4">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><BsFacebook/></a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><RiTwitterFill /></a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><GrGoogle /></a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><BsInstagram /></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><AiFillLinkedin /></a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><GoMarkGithub /></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center text-dark p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
                    © 2022 Copyright: Bike Rental Portal
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    )
}
