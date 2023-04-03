<<<<<<< HEAD
import React from 'react'
import './style.css'
import carImg from '../Hero/carImg.png'


function Hero() {
    const pathName = window.location.href

    return (
        <div id="hero-section" class="bg-light-purpple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 pe-5 align-self-center">
                        <h1> Sewa dan Rental Mobil Terbaik di kawasan Bandar Lampung</h1><br />
                        <h6>Selamat datang di Binar Car Rental, Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h6>
                        <br />

                        <button OnClick={() => ('/cari-mobil')} type="button" className='btn btn-success mt-'>
                            <a>Mulai Sewa Mobil</a>
                        </button>
                    </div>
                </div>
                <div class="col-lg-6 right-hero"> </div>
                <div class="car-style">
                </div>

                <img class="car img-fluid" src={carImg} alt="car" style={{ width: "70%", height: "407px", left:"1440px", top: "97"}} />
            </div>
        </div>
    )
}
=======
import React from "react";
import "./style.css";
import carImg from "../Hero/carImg.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div class="container-fluid padding-custom">
      <div class="row">
        <div className="col">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>

          <a
            name=""
            id=""
            class="btn btn-primary"
            style={{ background: "#5CB85F", border: "none" }}
            href="/cari-mobil"
            role="button"
          >
            Mulai Sewa Mobil
          </a>
        </div>

        <div className="col">
          <div className="car-style" style={{ position: "relative" }}>
            <div className="car-img-wrapper">
              <img src={carImg} width="600px" height={"auto"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> acf819474a357ae1573db77f35ca056dd3b34f81

export default Hero;
