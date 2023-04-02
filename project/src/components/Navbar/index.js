import React from 'react'
import "./style.css"
import logoImg from '../Navbar/logo.png'

const Navbar = () => {
    return (
        <>
            {/* //navbar */}
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light-purple">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="https://www.figma.com/file/glOKf32vS4pohEL9ccEhid/BCR---Binar-Car-Rental-(Gold)?node-id=111-5698&t=XYbqu6qyU2mAHsaw-0"><img src={logoImg} alt= "logo"/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav" style={{width: "600px"}}>
                                <a class="nav-link text-dark" href="#our-service-section">Our Services</a>
                                <a class="nav-link text-dark" href="#WhyUs-section">Why Us</a>
                                <a class="nav-link text-dark" href="#Testimonial-section">Testimonial</a>
                                <a class="nav-link text-dark" href="faq-section">FAQ</a>
                            </div>
                        </div>
                        {/* // container */}
                        <div class="text-center">
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar